import { createContext, useReducer, useContext, useState } from "react";
import { cartReducer } from "./Reducer";
import { BathroomFurnitureData, BedroomFurnitureData, LivingroomFurnitureData, KitchenFurnitureData } from "./FurnitureData";

const Cart = createContext();
const BathroomContext = createContext();
const BedroomContext = createContext();
const LivingroomContext = createContext();
const KitchenContext = createContext();

const BathroomProvider = ({ children }) => {
  const [bathroomFurnitureData,setBathroomFurnitureData] =useState(BathroomFurnitureData)

  return (
    <BathroomContext.Provider value={{bathroomFurnitureData}}>
      {children}
    </BathroomContext.Provider>
  );
};

const BedroomProvider = ({ children }) => {
  const [bedroomFurnitureData,setBedroomFurnitureData] =useState(BedroomFurnitureData)


  return (
    <BedroomContext.Provider value={{bedroomFurnitureData}}>
      {children}
    </BedroomContext.Provider>
  );
};

const LivingroomProvider = ({ children }) => {
  const [livingroomFurnitureData,setBedroomFurnitureData] =useState(LivingroomFurnitureData)

  return (
    <LivingroomContext.Provider value={{livingroomFurnitureData}}>
      {children}
    </LivingroomContext.Provider>
  );
};

const KitchenProvider = ({ children }) => {
  const [kitchenFurnitureData ,setBedroomFurnitureData] =useState(KitchenFurnitureData )

  return (
    <KitchenContext.Provider value={{kitchenFurnitureData}}>
      {children}
    </KitchenContext.Provider>
  );
};

const CartProvider = ({ children }) => {
    const [state, dispatch] = useReducer(cartReducer, {
      Cart: []
    });
  
    return (
      <Cart.Provider value={{ state, dispatch }}>
        {children}
      </Cart.Provider>
    );
  };
  
const Context = ({ children }) => {
  return (
    <BathroomProvider>
      <BedroomProvider>
        <LivingroomProvider>
          <KitchenProvider>
            <CartProvider>
              {children}
            </CartProvider>
          </KitchenProvider>
        </LivingroomProvider>
      </BedroomProvider>
    </BathroomProvider>
  );
};

export default Context;

export const CartState = () => {
  return useContext(Cart);
};

export const BathroomState = () => {
  return useContext(BathroomContext);
};

export const BedroomState = () => {
  return useContext(BedroomContext);
};

export const LivingroomState = () => {
  return useContext(LivingroomContext);
};

export const KitchenState = () => {
  return useContext(KitchenContext);
};
