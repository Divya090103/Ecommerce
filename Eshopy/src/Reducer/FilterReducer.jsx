import React from "react";
import { useReducer } from "react";
const Filterproducts = (state, action) => {
  switch (action.type) {
    case "Load_Filter_Products":
      return {
        ...state,
        allproducts: [...action.payload],
        Filter_products: [...action.payload],
      };
      case "set_grid_view":
        return{
            ...state,
            allproducts:[...action.payload],
            Filterproducts:[...action.payload],
            gridview:true
        };
  }
};
export { Filterproducts };
