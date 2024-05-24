import React from "react";
import { BsGrid3X3GapFill } from "react-icons/bs";
import { FaList } from "react-icons/fa";
import { UseFiltercontext } from "../context/Filtercontext";
const Sort = () => {
  const { gridview, setgridview, setlistview, Filter_products, sorting } =
    UseFiltercontext();

  return (
    <>
      <div className="container row justify-content-between">
        <div className="col-lg-4 col-md-12">
          <button
            className={gridview ? "actives button-17 fs-3" : "button-17 fs-4"}
            onClick={setgridview}
          >
            <BsGrid3X3GapFill />
          </button>
          &nbsp;
          <button
            className={gridview ? "button-17 fs-4" : "actives button-17 fs-3"}
            onClick={setlistview}
          >
            <FaList />
          </button>
        </div>
        <div className="fs-5 col-lg-4 col-md-12">
          {Filter_products.length} products Available
        </div>
        <div className="col-lg-4 col-md-12">
          <form action="#">
            <label htmlFor="sort"></label>
            <select name="sort" id="sort" onClick={sorting}>
              <option value="price_asc">Price: Low to High</option>
              <option value="price_desc">Price: High to Low</option>
              <option value="name_asc">Name: A to Z</option>
              <option value="name_desc">Name: Z to A</option>
            </select>
          </form>
        </div>
      </div>
    </>
  );
};
export default Sort;
