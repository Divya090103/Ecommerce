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
  // const [arr, setArr] = useState([])
  const getapi = async (url) => {
    dispatch({ type: "LOADING_PRODUCTS" });
    try {
      const res = await axios.get(url);
      const product = res.data;
      console.log(product);
      dispatch({ type: "Set_Api_data", payload: product });
    } catch (error) {
      dispatch({ type: "Single_Error" });
    }
  };

  //my second api for single product\
  const getsingleproduct = async (url) => {
    dispatch({ type: "LOADING_Single_PRODUCTS" });
    try {
      const res = await axios.get(url);
      const singleproduct = res.data;
      console.log(singleproduct);
      dispatch({ type: "Set_Single_data", payload: singleproduct });
    } catch (error) {
      dispatch({ type: "Single_product_Error" });
    }
  };
  useEffect(() => {
    getapi("https://api.pujakaitem.com/api/products");
  }, []);
  return (
    <Appcontext.Provider value={{ ...state, getsingleproduct }}>
      {children}
    </Appcontext.Provider>
  );
};
export { Appcontext, Appprovider };
