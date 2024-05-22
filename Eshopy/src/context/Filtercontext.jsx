import { createContext, useContext, useEffect, useReducer } from "react";
import { Appcontext } from "./Productcontext";
import { CgFontSpacing } from "react-icons/cg";
import { Filterproducts } from "../Reducer/FilterReducer";
const Filtercontext = createContext();
const initialstate = {
  allproducts: [],
  Filter_products: [],
  gridview:true
};

export const FiltercontextProvider = ({ children }) => {
  const { Products } = useContext(Appcontext);
  const [state, dispatch] = useReducer(Filterproducts, initialstate);
  const setgridview=()=>{
    dispatch({type:"set_grid_view",payload:Products});
  }
  useEffect(() => {
    dispatch({ type: "Load_Filter_Products", payload: Products });
  }, [Products]);
  return (
    <Filtercontext.Provider value={{ ...state ,setgridview}}>
      {children}
    </Filtercontext.Provider>
  );
};
export const UseFiltercontext = () => {
  return useContext(Filtercontext);
};
