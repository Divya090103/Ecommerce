import { createContext, useContext, useEffect, useReducer } from "react";
import { Appcontext } from "./Productcontext";
import { CgFontSpacing } from "react-icons/cg";
import { Filterproducts } from "../Reducer/FilterReducer";
const Filtercontext = createContext();
const initialstate = {
  allproducts: [],
  Filter_products: [],
  gridview: true,
  Sortingvalue: "price_asc",
};

export const FiltercontextProvider = ({ children }) => {
  const { Products } = useContext(Appcontext);
  const [state, dispatch] = useReducer(Filterproducts, initialstate);
  //set grid view
  const setgridview = () => {
    dispatch({ type: "set_grid_view", payload: Products });
  };
  //set lst view
  const setlistview = () => {
    dispatch({ type: "set_list_view", payload: Products });
  };
  //sorting tht products
  const sorting = () => {
    dispatch({ type: "sort_the_products" });
  };
  //to sort the products
  useEffect(() => {
    dispatch({ type: "sorting", payload: Products });
  }, [state.Sortingvalue]);
  //to filetre the products

  useEffect(() => {
    dispatch({ type: "Load_Filter_Products", payload: Products });
  }, [Products]);
  return (
    <Filtercontext.Provider
      value={{ ...state, setgridview, setlistview, sorting }}
    >
      {children}
    </Filtercontext.Provider>
  );
};
export const UseFiltercontext = () => {
  return useContext(Filtercontext);
};
