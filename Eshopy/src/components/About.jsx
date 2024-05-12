import React from "react";
import Navbar from "./Navbar";
import Herosection from "./Herosection";
import Crousel from "./Crousel";
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