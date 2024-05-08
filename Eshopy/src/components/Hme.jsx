import React from "react";
import Herosection from "./Herosection";
import Features from "./Features";
import Trust from "./Trust";
const Hme=()=>{
  const data="WEB STORE"
  return(
    <>
<Herosection title={data} />
<Features/>
<Trust/>
</>
  );
}
export default Hme;