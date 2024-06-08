import React, { useContext } from "react";
import { MdDelete } from "react-icons/md";
import Counter from "./Counter";
import { Cartcontext } from "../context/Cartcontext";
const Item = ({ id, name, image, price, stk, clr }) => {
  //destructuring of an array
  const { totlamt,remove } = useContext(Cartcontext);
  console.log(id, name, image, price, stk, clr);
  return (
    <>
      <section>
        <div className="d-flex mt-3 justify-content-between text-center">
          <h5 className="text-left">
            <img src={image} style={{ width: 50 }} />
            <br />
            {name}
            <br />
            <p>Color:{clr} </p>
          </h5>
          <h5 className="cart-hide">{price}</h5>
          <h5>
            <Counter stock={stk} />
          </h5>
          <h5 className="cart-hide">{totlamt}</h5>
          <h5>
            <MdDelete className="fs-1 text-danger" onClick={()=>remove(id)} />
          </h5>
        </div>
        <hr />
      </section>
    </>
  );
};
export default Item;
