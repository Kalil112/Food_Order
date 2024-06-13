import { createContext, useReducer, useState } from "react";

export const FoodContext = createContext({
  orders: [],
});

function foodReducerFn(state, action) {
  if (action.type === "Add_Item") {
    let existingItemIndex = state.orderArr.findIndex(
      (item) => item.id == action.orderItem.id,
    );

    if (existingItemIndex == -1) {
      let temp = [...state.orderArr, action.orderItem];
      return {
        orderArr: temp,
      };
    }
  }

  if (action.type === "Increment") {
    let itemIndex = state.orderArr.findIndex(
      (item) => item.id == action.orderId,
    );
    let updatingItems = [...state.orderArr];
    let updatingItem = { ...updatingItems[itemIndex] };
    updatingItem.quantity += 1;
    updatingItems[itemIndex] = updatingItem;

    return {
      orderArr: updatingItems,
    };
  }

  if (action.type === "Decrement") {
    let itemIndex = state.orderArr.findIndex(
      (item) => item.id == action.orderId,
    );
    let updatingItems = [...state.orderArr];
    let updatingItem = { ...updatingItems[itemIndex] };
    updatingItem.quantity -= 1;
    if (updatingItem.quantity >= 1) {
      updatingItems[itemIndex] = updatingItem;
    } else {
      updatingItems.splice(itemIndex, 1);
    }

    return {
      orderArr: updatingItems,
    };
  }

  return {
    orderArr: state.orderArr,
  };
}

export function FoodContextProvider({ children }) {
  const [cartStatus, setCartStatus] = useState(false);
  const [orders, dispatch] = useReducer(foodReducerFn, { orderArr: [] });

  function AddItem(OrderItem) {
    dispatch({ type: "Add_Item", orderItem: OrderItem });
  }

  function incrementQuantity(OrderItem) {
    dispatch({ type: "Increment", orderId: OrderItem.id });
  }

  function decrementQuantity(OrderItem) {
    dispatch({ type: "Decrement", orderId: OrderItem.id });
  }

  const contextValue = {
    orders,
    AddItem,
    incrementQuantity,
    decrementQuantity,
    cartStatus,
    setCartStatus,
  };

  return (
    <FoodContext.Provider value={contextValue}>{children}</FoodContext.Provider>
  );
}
