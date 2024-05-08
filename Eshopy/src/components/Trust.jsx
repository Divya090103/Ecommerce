import React from "react";
import { IoLogoVimeo } from "react-icons/io";
import { SiNintendogamecube } from "react-icons/si";
import { RiHeartsFill } from "react-icons/ri";
import { MdInsertChart } from "react-icons/md";
const Trust=()=>{
  return(
    <>
    <section className="container-fluid mt-5" >
      <div className="container mt-5 card p-4">
      <h4 className="p-3">Trusted by 1000+companies</h4>
      <div className="row container">
        <div className="col-lg-3 col-md-12 d-flex align-item-center justify-content-center">
       <IoLogoVimeo className="icon fs-1"/> <h2>VENA</h2>
        </div>
        <div className="col-lg-3 col-md-12 d-flex align-item-center justify-content-center">
         <MdInsertChart className="icon fs-1"/> <h2>CHARTZ</h2>
        </div>
        <div className="col-lg-3 col-md-12 d-flex align-item-center justify-content-center">
             <SiNintendogamecube className="icon fs-1"/> <h2>LOGIC+</h2>
        </div>
        <div className="col-lg-3 col-md-12 ">
              <RiHeartsFill className="icon fs-1"/>
        </div>
      </div>
      </div>
    </section>
    </>
  );
}
export default Trust;