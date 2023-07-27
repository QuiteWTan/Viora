import { createContext, useReducer, useContext } from "react";
import faker from 'faker'
import { cartReducer } from "./Reducer";
import { BathroomFurnitureData} from "./FurnitureData";

const Cart = createContext();
const Data = BathroomFurnitureData;

const Context = ({children}) => {
    const [state, dispatch] = useReducer(cartReducer,{
        furniture: Data,
        cart:[], 
    })
    return <Cart.Provider value={{state,dispatch}}>{children}</Cart.Provider>
}

export default Context

export const CartState = () => {
    return useContext(Cart);
}

