import React, { act } from "react";
import { useReducer } from "react";
const ProductReducer = (state, action) => {
  switch (action.type) {
    case "LOADING_PRODUCTS":
      return {
        ...state,
        isloading: "true",
        isError: "False",
      };
    case "LOADING_Single_PRODUCTS":
      return {
        ...state,
        issingleload: "true",
        isError: "False",
      };
    case "Set_Single_data":
      return {
        ...state,
        issingleload: "false",
        singleproduct: action.payload,
      };
    case "Single_product_Error":
      return {
        ...state,
        issingleload: "false",
        singleerror: "true",
      };
    case "Set_Api_data":
      const FeaturedData = action.payload.filter((currelem) => {
        return currelem.featured === true;
      });
      return {
        ...state,
        isloading: false,
        Products: action.payload,
        FeaturedProduct: action.payload,
        isError: "false",
      };
    case "Error":
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    default:
      return {
        ...state,
      };
  }
};
export { ProductReducer };
