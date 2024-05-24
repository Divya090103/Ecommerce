import React from "react";
import { NavLink } from "react-router-dom";

const Herosection = (props) => {
  return (
    <>
      <section>
        <div className="container mt-5">
          <div className="row">
            <div className="col-lg-6 col-md-12 data">
              <div className="elem">
                WELCOME TO
                <h1>{props.title}</h1>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  <br></br>Veritatis doloremque excepturi maxime animi nihil.
                  Tempore, earum aspernatur sed quasi debitis ad nostrum
                  sapiente distinctio rem quidem qui! Suscipit, sint facilis.
                </p>
                <NavLink to="/product" className="btn1">
                  <button className="button-17" role="button">
                    Shop Now
                  </button>
                </NavLink>
              </div>
            </div>
            <div className="col-lg-6 col-md-12 image">
              <div className="backg "></div>
              <img className="hero" src="/images/mid.jpg" alt="" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Herosection;
