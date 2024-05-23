import React from "react";
import { NavLink } from "react-router-dom";
const List = ({ product, id }) => {
  return (
    <>
      <div className="col-lg-4 col-md-12">
        <img src={product.image} className="image" alt="" />
      </div>
      <div className="col-lg-8 col-md-12 text-left">
        <h2>{product.name}</h2>
        <h5>
          {new Intl.NumberFormat("en-IN", {
            style: "currency",
            currency: "INR",
            maximumFractionDigits: 2,
          }).format(product.price / 100)}
        </h5>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum enim eius
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente
        maiores libero dolorum laboriosam quas eligendi esse id minima fugit
        corrupti?
        <br />
        <NavLink to={`/singleproduct/${product.id}`}>
          <button className="button button-17">Read More</button>
        </NavLink>
      </div>
    </>
  );
};
export default List;
