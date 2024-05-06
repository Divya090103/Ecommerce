import React from "react";
import Navbar from "./Navbar";
import { Outlet } from "react-router";

import Hme from "./Hme";
const Home=()=>{
  const data="WEB STORE"

  return(
<>
<Navbar/>
<Outlet/>
</>
  );
}
export default Home;