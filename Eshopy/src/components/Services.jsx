import React, { useContext } from "react";
import { Appcontext } from "../context/Productcontext";

const Services = () => {
  const { isloading, products,name } = useContext(Appcontext);
console.log(products);
  return (
    <>
    <h1>{name}</h1>
   
  
  </>
  );
};

export default Services;
