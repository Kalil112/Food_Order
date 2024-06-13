import { useContext, useState } from "react";
import { FoodContext } from "../Store/FoodContext";
export default function CartList() {
  const { orders, incrementQuantity, decrementQuantity } =
    useContext(FoodContext);

  return (
    <>
      {orders.orderArr.map((element) => {
        return (
          <li className="cart-item">
            <div>
              <p>
                {element.name} - {element.quantity} x {element.price}
              </p>
            </div>
            <div className="cart-item-actions">
              <button
                onClick={() => {
                  decrementQuantity(element);
                }}
              >
                -
              </button>
              <p>{element.quantity}</p>
              <button
                onClick={() => {
                  incrementQuantity(element);
                }}
              >
                +
              </button>
            </div>
          </li>
        );
      })}
    </>
  );
}
