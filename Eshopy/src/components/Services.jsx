import React, { useContext } from "react";
import { Appcontext } from "../context/Productcontext";
import Cards from "./Cards";
const Services = () => {
  const { isloading, Products } = useContext(Appcontext);
  let i = 1;
  return (
    <>
      <section className=" mt-5">
        <div className="container p-2">
          <h1>OUR SERVICES</h1>
          <div className="row">
            {Products.slice(0, 4).map((product,id) => {
             return <Cards product={product} key={id}/>
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
