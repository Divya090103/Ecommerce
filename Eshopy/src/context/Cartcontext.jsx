import React, { createContext, useReducer } from "react";
import CartReducer from "../Reducer/CartReducer";
const Cartcontext = createContext();
const intialstate = {
  cart: [],
  totalitem: " ",
  totlamt: "",
  shipping_fee: 200,
};
const Cartprovider = ({ children }) => {
  const [state, dispatch] = useReducer(CartReducer, intialstate);
  // Define the addcart function here
  const addcart = ({ product, colr }) => {
    console.log(product);
  };

  return (
    <Cartcontext.Provider value={{ ...state, addcart }}>
      {children}
    </Cartcontext.Provider>
  );
};
export { Cartprovider, Cartcontext };
