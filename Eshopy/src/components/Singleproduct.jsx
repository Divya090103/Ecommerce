import React, { useContext, useEffect } from "react";
import { useParams } from "react-router";
import { Appcontext } from "../context/Productcontext";
const Singleproduct = () => {
  //get element from the url
  const { id } = useParams();
  const API = "https://api.pujakaitem.com/api/products";
  console.log("the id is" + id);
  const { getsingleproduct, issingleload, singleproduct, singleerror } =
    useContext(Appcontext);
  useEffect(() => {
    getsingleproduct(`${API}?id=${id}`);
  }, []);

  return (
    <>
      <section>
        <div className="container">
          <h1>/images/{singleproduct?.name}.jpg</h1>
          <img src={`/images/samsung s20.jpg`} alt={singleproduct?.name} />
          <h1>{singleproduct?.description}</h1>
        </div>
      </section>
    </>
  );
};
export default Singleproduct;
