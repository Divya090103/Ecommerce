import React, { useContext } from "react";
import Herosection from "./Herosection";
import Features from "./Features";
import Trust from "./Trust";
import {Appcontext} from "../context/Productcontext"
import Services from "./Services";

const Hme=()=>{
  const data="WEB STORE";
  const myname=useContext(Appcontext);
  return(
    <>
<Herosection title={data} />
<Services/>

<Features/>
<Trust/>
</>
  );
}
export default Hme;