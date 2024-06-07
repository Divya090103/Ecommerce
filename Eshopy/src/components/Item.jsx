import React from "react";
import Counter from "./Counter";
const Item = ({ id, name, image, price, stk, clr }) => {
  //destructuring of an array
  console.log(id, name, image, price, stk, clr);
  return (
    <>
      <section>
        <div className="d-flex mt-3 justify-content-evenly text-center">
          <h5>
            <img style={{ width: 100 }} src={image} />
            <br />
            {name}
            <button
              style={{
                backgroundColor: { clr },
                borderRadius: 100,
                width: 18,
                height: 18,
              }}
            >
              {""}
            </button>
          </h5>
          <h5>{price}</h5>
          <h6>
            <Counter stock={stk} />
          </h6>
          <h5>total</h5>
          <h5>remove</h5>
        </div>
        <hr />
      </section>
    </>
  );
};
export default Item;
