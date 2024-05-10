import { createContext, useEffect, useReducer } from "react";
import axios from "axios"
import {ProductReducer as reducer} from "../Reducer/ProductReducer";
const Appcontext=createContext();
const initialstate={
  name:"produst",
  isloading:false,
  isError:false,
  products:[],
};
const Appprovider=({children})=>{

  const [state,dispatch]=useReducer(reducer,initialstate);
  const getapi= async(url)=>{
    dispatch({type:"LOADING_PRODUCTS"});
    try{
      const res= await axios.get(url);
      const product=res.data;
      console.log(product);
        dispatch({type:"Set_Api_data",payload:product});
       console.log(product);
    }catch(error){

      dispatch({type:"Error"})
    }
  
  }
  useEffect(() => {
    getapi('https://dummyjson.com/products')
      
  }, []);
  return(
    <Appcontext.Provider value={state}>{children}</Appcontext.Provider>
  )
}
export { Appcontext, Appprovider }; 