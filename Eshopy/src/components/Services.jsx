import React, { useContext } from "react";
import { Appcontext } from "../context/Productcontext";
import { NavLink } from "react-router-dom";
const Services = () => {
  const { isloading, Products } = useContext(Appcontext);
  console.log(Products);
  let i = 1;
  return (
    <>
      <section className=" mt-5">
        <div className="container p-2">
          <h1>OUR SERVICES</h1>
          <div className="row">
            {Products.slice(0, 4).map((product) => {
              return (
                <div className="col-lg-3 col-md-12" key={product.id}>
                  <NavLink to={`/singleproduct/${product.id}`}>
                    <div className="card bg-light" style={{ width: "18rem" }}>
                      <img
                        src={product.image}
                        className="card-img-top"
                        alt="..."
                      />
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
                        {/* <p className="card-text">
                        
                        </p> */}
                      </div>
                    </div>
                  </NavLink>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
