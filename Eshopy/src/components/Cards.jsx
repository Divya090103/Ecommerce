import React from "react";
import { NavLink } from "react-router-dom";
const Cards = ({ product, id }) => {
  return (
    <>
      <div className="col-lg-3 col-md-12 " key={id}>
        <div className="card bg-light p-3" style={{ width: "18rem" }}>
          <NavLink to={`/singleproduct/${product.id}`}>
            <img src={product.images} className="card-img-top" alt="..." />
          </NavLink>
          <div className="card-body fs-5">
            <p className="card-text">
              {product.name}
              <br />
              {new Intl.NumberFormat("en-IN", {
                style: "currency",
                currency: "INR",
                maximumFractionDigits: 2,
              }).format(product.price)}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
export default Cards;
