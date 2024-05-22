import React from "react";
import { NavLink } from "react-router-dom";
const Cards = ({ product, id }) => {
  return (
    <>
      <div className="col-lg-3 col-md-12" key={id}>
        <NavLink to={`/singleproduct/${product.id}`}>
          <div className="card bg-light" style={{ width: "18rem" }}>
            <img src={product.image} className="card-img-top" alt="..." />
            <div className="card-body fs-5">
              <p className="card-text">
                {product.name}
                <br />
                {new Intl.NumberFormat("en-IN", {
                  style: "currency",
                  currency: "INR",
                  maximumFractionDigits: 2,
                }).format(product.price / 100)}
              </p>
            </div>
          </div>
        </NavLink>
      </div>
    </>
  );
};
export default Cards;
