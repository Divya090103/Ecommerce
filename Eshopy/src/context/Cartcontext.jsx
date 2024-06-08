import React, { createContext, useReducer } from "react";
import CartReducer from "../Reducer/Cartreducer";
const Cartcontext = createContext();
const intialstate = {
  cart: [],
  totalitem: 0,
  totlamt: 0,
  shipping_fee: 200,
};
const Cartprovider = ({ children }) => {
  const [state, dispatch] = useReducer(CartReducer, intialstate); // Define the addcart function here
  const addcart = (product, colr) => {
    dispatch({ type: "ADD_TO_CART", payload: { product, colr } });
  };
  const remove = (id) => {
    dispatch({ type: "REMOVE", payload:id} );
  };
  return (
    <Cartcontext.Provider value={{ ...state, addcart, remove}}>
      {children}
    </Cartcontext.Provider>
  );
};
export { Cartprovider, Cartcontext };
