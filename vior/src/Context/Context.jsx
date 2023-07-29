import { createContext, useReducer, useContext } from "react";
import { cartReducer } from "./Reducer";
import { BathroomFurnitureData, BedroomFurnitureData, LivingroomFurnitureData, KitchenFurnitureData } from "./FurnitureData";

const Cart = createContext();
const BathroomContext = createContext();
const BedroomContext = createContext();
const LivingroomContext = createContext();
const KitchenContext = createContext();

const BathroomProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, {
    Bathfurniture: BathroomFurnitureData,
  });

  return (
    <BathroomContext.Provider value={{ state, dispatch }}>
      {children}
    </BathroomContext.Provider>
  );
};

const BedroomProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, {
    Bedfurniture: BedroomFurnitureData,
  });

  return (
    <BedroomContext.Provider value={{ state, dispatch }}>
      {children}
    </BedroomContext.Provider>
  );
};

const LivingroomProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, {
    Livingfurniture: LivingroomFurnitureData,
  });

  return (
    <LivingroomContext.Provider value={{ state, dispatch }}>
      {children}
    </LivingroomContext.Provider>
  );
};

const KitchenProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, {
    Kitchenfurniture: KitchenFurnitureData,
  });

  return (
    <KitchenContext.Provider value={{ state, dispatch }}>
      {children}
    </KitchenContext.Provider>
  );
};

const CartProvider = ({ children }) => {
    const [state, dispatch] = useReducer(cartReducer, {
      furniture: [],
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
