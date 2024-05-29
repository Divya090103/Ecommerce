import React from "react";
import { UseFiltercontext } from "../context/Filtercontext";
import Gridview from "./Gridview";
import Lisview from "./Lisview";
const ProductList = () => {
  const { Filter_products, gridview } = UseFiltercontext();
  if(Filter_products.length==0)
  return <p>No result found</p>
  if (gridview === true) {
    return <Gridview products={Filter_products} />;
  } else return <Lisview products={Filter_products}/>;
};
export default ProductList;
