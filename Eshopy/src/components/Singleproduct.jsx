import React, { useContext, useEffect } from "react";
import { useParams } from "react-router";
import { Appcontext } from "../context/Productcontext";
import PageNavigation from "./PageNavigation";
import { FaTruck } from "react-icons/fa";
import { TbReplace } from "react-icons/tb";
import { PiSealCheckFill } from "react-icons/pi";
import MyImage from "./MyImage";
import Rating from "./Rating";
import Color from "./AddCart";
import AddCart from "./AddCart";
const Singleproduct = () => {
  //get element from the url
  const { id } = useParams();
  const API = "http://localhost:3000/api/products";
  const { getsingleproduct, issingleload, singleproduct } =
    useContext(Appcontext);
  useEffect(() => {
    getsingleproduct(`${API}/?id=${id}`);
  }, []);
  console.log(`${API}/id=${id}`);

  const arr = singleproduct[0];
  console.log("this is an", id);
  console.log("array is fetch", arr);
  return (
    <>
      <section>
        <PageNavigation name={arr.name} />
        <div className="container mt-5">
          <div className="row">
            <div className="col-lg-6 col-md-6">
              <MyImage myimage={arr.images} />
            </div>
            <div className="col-lg-6 col-md-6">
              <h3>{arr.name}</h3>
              <Rating stars={arr.stars} review={arr.reviews} />
              <h5>{arr.description}</h5>
              <h3>
                {new Intl.NumberFormat("en-IN", {
                  style: "currency",
                  currency: "INR",
                  maximumFractionDigits: 2,
                }).format(arr.price)}
              </h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Sapiente alias culpa repudiandae distinctio, asperiores iste
                suscipit dolorem fugit odio aperiam.
              </p>
              <h4>Available:{arr.stock}</h4>
              <hr />
              <AddCart product={arr} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Singleproduct;
