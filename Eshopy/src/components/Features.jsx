import React from "react";
import { CiDeliveryTruck } from "react-icons/ci";
import { SiOpenbadges } from "react-icons/si";
import { GiReceiveMoney } from "react-icons/gi";
import { RiSecurePaymentFill } from "react-icons/ri";
const Features=()=>{
  return(
<>
<section className="container mt-5">
  <div className="row mt-5">
    <div className="col-md-12 col-lg-4 sect">
      <div className="card">
      <CiDeliveryTruck className="fs-1 icon"/>
      <h5>Super Fast And Delivery</h5>
      </div>
    </div>
    <div className="col-md-12 col-lg-4">
      <div className="card p-3">
       <SiOpenbadges className="fs-1 icon"/> 
        <h5>Verified Badges and Certificates</h5>
      </div>
      <div className="mt-3 card p-3">
        <GiReceiveMoney className="fs-1 icon"/> 
        <h5>Money back Guranted</h5>
      </div>
    </div>
    <div className="col-md-12 col-lg-4 sect">
      <div className="card">
        <RiSecurePaymentFill className="fs-1 icon"/>
        <h5>Super Secure Payment System</h5>
      </div>
    </div>
  </div>
</section>
</>
  );
}
export default Features;