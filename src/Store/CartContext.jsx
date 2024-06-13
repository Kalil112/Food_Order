import {createContext,useReducer} from react;
const CartContext = createContext({
    orders:[]
});

function reducerfn(state,action){
    if(action.type==="Add_Item"){
        let index=state.orderItems.findIndex((item)=>{
            item.id===action.item.id;
        })
        let temp = [...state.orderItems,action.payload];

        return{
            orderItems:temp,//updated array of obj state
        }
    }

}

export default function CartContextProvider({children}){

    const [orders,dispatch]=useReducer(reducerfn,{
        orderItems:[],
    });

    function addItems(item){
        dispatch({
            type:"Add_Item",
            payload:item
        })
    }

    let contextValue={
        addItems,
        orders,
    }
    return(<CartContextProvider value={contextValue}>{children}</CartContextProvider>);
}
