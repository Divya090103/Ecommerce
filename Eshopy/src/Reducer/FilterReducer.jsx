import { all } from "axios";
import React, { act } from "react";
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
      return {
        ...state,
        allproducts: [...action.payload],
        Filter_products: [...action.payload],
        gridview: true,
      };
    case "set_list_view":
      return {
        ...state,
        gridview: false,
      };

    case "sort_the_products":
      let uservalue = document.getElementById("sort");
      let sort_value = uservalue.options[uservalue.selectedIndex].value;

      return {
        ...state,
        Sortingvalue: sort_value,
      };
    case "sorting":
      let newsort;
      let tempsort = [...state.Filter_products];
      if (state.Sortingvalue === "price_asc") {
        newsort = tempsort.sort((a, b) => a.price - b.price);
      } else if (state.Sortingvalue === "price_desc") {
        newsort = tempsort.sort((a, b) => b.price - a.price);
      } else if (state.Sortingvalue === "name_asc") {
        newsort = tempsort.sort((a, b) => a.name.localeCompare(b.name));
      } else if (state.Sortingvalue === "name_desc") {
        newsort = tempsort.sort((a, b) => b.name.localeCompare(a.name));
      }
      return {
        ...state,
        Filter_products: newsort,
        // allproducts: newsort,
      };
    //claer
    case "Clear_filter":
      return {
        ...state,
        filter: {
          text: "",
          category: "",
          companys: "",
          minprice:0,
          price:0,
        },
      };
    case "filter_products":
      let { allproducts } = state;
      let tempsort2 = [...allproducts];
      let { text, category, companys, price } = state.filter;
      if(price){
        tempsort2=tempsort2.filter((curr)=>{
          return curr.price<=price
        })
      }
      if (text) {
        tempsort2 = tempsort2.filter((curr) => {
          return curr.name.includes(text);
        });
      }
      if (category) {
        tempsort2 = tempsort2.filter((curr) => {
          return curr.name.includes(category);
        });
      }
      if (companys) {
        tempsort2 = tempsort2.filter((curr) => {
          return curr.company.includes(companys);
        });
      }
      return {
        ...state,
        Filter_products: tempsort2,
      };
    case "update_filter":
      const { name, value } = action.payload;
      return {
        ...state,
        filter: {
          ...state.filter,
          [name]: value,
        },
      };

    default:
      return {
        ...state,
      };
  }
};
export { Filterproducts };
