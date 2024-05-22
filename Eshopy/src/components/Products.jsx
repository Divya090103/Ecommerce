import React from "react";
import { UseFiltercontext } from "../context/Filtercontext";
import Filter from "./Flter";
import ProductList from "./ProductList";
const Products = () => {
  return (
    <>
      <div className="container mt-5 text-center">
        <div className="row">
          <div className="col-lg-3 col-md-2">
               <Filter/>
          </div>
          <div className="col-lg-9 col-md-10">
            <ProductList/>
          </div>
        </div>
      </div>
    </>
  );
};
export default Products;
