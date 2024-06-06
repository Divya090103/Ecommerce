import React, { useContext, useState } from "react";
import { FaCheck } from "react-icons/fa";
import Counter from "./Counter";
import Singleproduct from "./Singleproduct";
import { NavLink } from "react-router-dom";
import { Cartprovider, Cartcontext } from "../context/Cartcontext";
const AddCart = ({ product }) => {
  const { id, stock, colors } = product;
  console.log(stock);
  console.log(colors);
  const [colr, setcolor] = useState(colors[0]);
  const { addcart } = useContext(Cartcontext);
  return (
    <>
      <div>
        <div style={{ whiteSpace: "nowrap", verticalAlign: "top" }}>
          Colors:
          {colors.map((color, ing) => {
            return (
              <button
                key={ing}
                className={colr === color ? "ms-1 active" : "ms-1"}
                style={{
                  backgroundColor: color,
                  borderRadius: 100,
                  width: 18,
                  height: 18,
                }}
                onClick={() => {
                  setcolor(color);
                }}
              >
                {colr === color ? <FaCheck className="text-warning" /> : null}
              </button>
            );
          })}
        </div>
        <br />
        <NavLink to="/cart" onClick={() => addcart({ product, colr })}>
          <button className="button-29">ADD TO CART</button>
        </NavLink>
      </div>
    </>
  );
};
export default AddCart;
