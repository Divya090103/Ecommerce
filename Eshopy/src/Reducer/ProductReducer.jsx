import React from "react";
import { useReducer } from "react";
const ProductReducer=(state,action)=>{
  switch(action.type){
    case "LOADING_PRODUCTS":
    return{
      ...state,
      isloading:"true",
      isError:"False"
    }
    case "Set_Api_data":
      return{
        ...state,
        isloading:false,
        products: action.payload,
        isError:"false"
      }
      case "Error":
        return{
          ...state,
          isLoading: false, 
          isError: true,
        }
        default: 
        return{
          ...state
        }
  }
}
export {ProductReducer};