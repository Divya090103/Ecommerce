import React, { useContext } from "react";
import Navbar from "./Navbar";
import Herosection from "./Herosection";
import Crousel from "./Crousel";
import { Appcontext } from "../context/Productcontext";
const About=()=>{

  const data="WEB ECOMMERCE"
  return(
<>
<Herosection title={data}/>

<Crousel/>
</>
  );
}
export default About;