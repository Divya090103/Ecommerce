import React from "react";
import { FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaPinterestP } from "react-icons/fa";
const Footer=()=>{
  return(
    <section className="container-fluid bg-dark  text-center  ">
    <div className="container text-light">
    <footer className="row row-cols-1 row-cols-sm-2 row-cols-md-5 py-5 my-5 border-top">
      <div className="col  ms-5 ">
        <h5>Get to know Us</h5>
        <ul className="nav flex-column text-light">
          <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-light">About US</a></li>
          <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-light">Career</a></li>
          <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-light">Press releases</a></li>
          <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-light">Ellite Science</a></li>
        </ul>
      </div>
  
      <div className="col mb-3 text-light">
        <h5>Connect With Us</h5>
        <ul className="nav flex-column">
          <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-light">Facebook</a></li>
          <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-light">Twitter</a></li>
          <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-light">Instagram</a></li>
        </ul>
      </div>
  
      <div className="col text-light">
        <h5>Let Us Help U</h5>
        <ul className="nav flex-column">
          <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-light">COVID-19 with ELLITESHOPY</a></li>
          <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-light">Your Account</a></li>
          <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-light">Return Center</a></li>
          <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-light">100% Purchase product</a></li>
        </ul>
      </div>
      <div className="col mb-3 text-light">
        <h5>CALL US:</h5>
          <p className="nav-item mb-2"><a href="#" className="nav-link p-0 text-light">+91-3892579346034</a></p>
     
      </div>
    </footer>
    <h6>@{new Date().getFullYear()} All rights are Reserveed</h6>

    <hr></hr>
  <div className="text-center">
    <ul>
      <li className="d-inline-block p-2 fs-1 me-4"><FaFacebookF/></li>
      <li className="d-inline-block p-2 fs-1 me-4"> <FaInstagram/></li>
      <li className="d-inline-block p-2 fs-1 me-4"> <FaPinterestP/></li>
      <li className="d-inline-block p-2 fs-1 me-4"><FaTwitter/></li>
    </ul>
  <h3>BRITGHTEN UP YOUR INBOX</h3>
 
  </div>
  </div>  
  </section> 
  );
}
export default Footer;