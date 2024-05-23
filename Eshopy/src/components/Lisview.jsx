import React from "react";
import Cards from "./Cards";
import { NavLink } from "react-router-dom";
import List from "./List";
const Lisview = ({ products }) => {
  return (
    <div className="container">
      {products.map((product, id) => {
        return (
          <div className="mt-2 row glist" key={id}>
            <List product={product} />
          </div>
        );
      })}
    </div>
  );
};

export default Lisview;
