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
  const API = "https://api.pujakaitem.com/api/products";
  console.log("the id is" + id);
  const { getsingleproduct, issingleload, singleproduct, singleerror } =
    useContext(Appcontext);
  console.log(singleproduct.image);
  useEffect(() => {
    getsingleproduct(`${API}?id=${id}`);
  }, []);

  return (
    <>
      <section>
        <PageNavigation />
        <div className="container text-left mt-5">
          <div className="row">
            <div className="col-lg-6 col-md-12">
              <MyImage myimage={singleproduct.image} />
            </div>
            <div className="col-lg-6 col-md-12">
              <div>
                <h1>{singleproduct?.name}</h1>
                <Rating
                  stars={singleproduct?.stars}
                  review={singleproduct?.reviews}
                />
                <p className="text-secondary">
                  MRP:
                  <del>
                    {" "}
                    {new Intl.NumberFormat("en-IN", {
                      style: "currency",
                      currency: "INR",
                      maximumFractionDigits: 2,
                    }).format((singleproduct.price + 200000) / 100)}
                  </del>
                </p>
                <h5 className="text-primary">
                  Deal of the Day:
                  {new Intl.NumberFormat("en-IN", {
                    style: "currency",
                    currency: "INR",
                    maximumFractionDigits: 2,
                  }).format(singleproduct.price / 100)}
                </h5>
                <p className="text-secondary">{singleproduct?.description}</p>
              </div>
              <div className="d-flex align-items-center justify-content-between mt-4">
                <div className="text-center">
                  <TbReplace className="icon fs-2" />
                  <p>30 Days Replacement</p>
                </div>
                <div className="text-center">
                  <FaTruck className="icon fs-2" />
                  <p>Free Delivery</p>
                </div>
                <div className="text-center">
                  <PiSealCheckFill className="icon fs-2" />
                  <p>2year Warranty</p>
                </div>
                <div className="text-center">
                  <FaTruck className="icon fs-2" />
                  <p>Elitte Delivery</p>
                </div>
              </div>
              <hr />
              <div>
                <h5>Available:In stock</h5>
                <h5>Brand:{singleproduct?.company}</h5>
              </div>
              <hr />
              <div>{singleproduct.stock>0&&<AddCart product={singleproduct} />}</div>

            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Singleproduct;
