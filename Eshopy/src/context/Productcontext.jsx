import { createContext, useEffect, useReducer, useState } from "react";
import axios from "axios";
import { ProductReducer as reducer } from "../Reducer/ProductReducer";
const Appcontext = createContext();
const initialstate = {
  name: "produst",
  isloading: false,
  isError: false,
  Products: [],
  FeaturedProduct: [],
  issingleload: false,
  singleproduct: {},
  singleerror: false,
};
const Appprovider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialstate);
  const getapi = async (url) => {
    dispatch({ type: "LOADING_PRODUCTS" });
    try {
      const res = await axios.get(url);
      const product = res.data;
      dispatch({ type: "Set_Api_data", payload: product.product });
    } catch (error) {
      dispatch({ type: "Single_Error" });
    }
  };

  //my second api for single product\
  const getsingleproduct = async (url) => {
    dispatch({ type: "LOADING_Single_PRODUCTS" });
    try {
      const res = await axios.get(url);
      const singleProduct = res.data;
      dispatch({ type: "Set_Single_data", payload: singleProduct.product });
    } catch (error) {
      dispatch({ type: "Single_product_Error" });
    }
  };
  useEffect(() => {
    getapi("http://localhost:3000/api/products");
  }, []);
  return (
    <Appcontext.Provider value={{ ...state, getsingleproduct }}>
      {children}
    </Appcontext.Provider>
  );
};
export { Appcontext, Appprovider };
