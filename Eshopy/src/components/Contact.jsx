import React from "react";
import Navbar from "./Navbar";

const Contact=()=>{
  return(
<> 
<section className="container-fluid mt-5 text-center">
<div>
    <h3>Wanna chat with a customer Service?</h3>
    <h4>Call 1-800-992-3774</h4>
    <h3>Monday-Friday :8am-5pm CST</h3>
  </div>
<iframe  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13829.26421731592!2d81.85771167995337!3d25.494117138693007!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399aca7f17f367db%3A0x6615fab222883f15!2sTeliarganj%2C%20Prayagraj%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1715070082296!5m2!1sen!2sin" 
width="100%" height="450" style={{border:0}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
  <div className="mt-5 text-center">
    <h4>Wanna return something or any query contact here?</h4>
    <div className="form mt-5">
    <form action="https://formspree.io/f/mqkrnrke" method="POST" className="d-flex-column">
      <input type="text" placeholder="Username" name="user" required autoComplete="off"/>
      <br/>
      <input type="email" placeholder="Email" autoComplete="off" required name="mail" className="mt-3"/>
      <br/>
      <textarea autoComplete="off" className="mt-3"name="Enter your message" id=""cols="60" rows="6"></textarea>
      <br/>
    <button className="button-17">CLICK HERE </button> 
    </form>
    </div>
    <br></br>
  </div>

 
</section>
</>
  );
}
export default Contact;