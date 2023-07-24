import { createContext, useReducer, useContext } from "react";
import faker from 'faker'
import { cartReducer } from "./Reducer";
import { bathroomFurniture } from "./FurnitureData";

const Cart = createContext();
const Data = bathroomFurniture;

const Context = ({children, value}) => {
    const [state, dispatch] = useReducer(cartReducer,{
        furniture: Data,
        cart:[], 
    })
    console.log(state)
    return <Cart.Provider value={{state,dispatch}}>{children}</Cart.Provider>
}

export default Context

export const CartState = () => {
    return useContext(Cart);
}