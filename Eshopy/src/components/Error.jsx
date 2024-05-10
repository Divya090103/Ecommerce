import React from "react";
import { TbBrowserCheck } from "react-icons/tb";
import { BsCloudCheckFill } from "react-icons/bs";
import { MdOutlineWifiTetheringError } from "react-icons/md";
import { NavLink } from "react-router-dom";
const Error=()=>{
  return(
<>

  <div className="mt-5 container text-center">
    <h1 className="fw-light">WEB SERVER RETURNING AN UNKNOWN ERROR</h1>
    <span>Error code 404</span>
    <h4>Visit <a href="https://www.cloudflare.com/" target="_blank">cloudfare.com </a>for more information</h4>
    <h5>{new Date().toLocaleDateString()} {new Date().toLocaleTimeString()}</h5>
    <NavLink to='/'><button className="button-29"> HOME</button></NavLink>
  </div>

  <div className="container-fluid mt-5 bg-light bg-gradient p-5">
    <div className="container">
      <div className="row">
        <div className="col-lg-4 col-md-12 text-center">
        <h1 className="text-secondary"><TbBrowserCheck /></h1>
          <h4>You</h4>
          <span className="fs-2 fw-light text-secondary">Browser</span>
          <p className="fs-1 fw-light text-success">Working</p>
        </div>
        <div className="col-lg-4 col-md-12 text-center">
        <h1 className="text-secondary"><BsCloudCheckFill /></h1>
        <h4>Singapore</h4>
          <span className="fs-2 fw-light text-secondary">Cloudfare</span>
          <p className="fs-1 fw-light text-success">Working</p>
        </div>
        <div className="col-lg-4 col-md-12 text-center">
          <h1 className="text-secondary"><MdOutlineWifiTetheringError /></h1>
        <h4>www.cloudfare.com</h4>
          <span className="fs-2 fw-light text-secondary">Host</span>
          <p className="fs-1 fw-light text-success">Error</p>
        </div>
      </div>
    </div>

  </div>
</>
  );
}
export default Error;