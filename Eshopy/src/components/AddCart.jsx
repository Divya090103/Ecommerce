import React, { useState } from "react";
import { FaCheck } from "react-icons/fa";
import Counter from "./Counter";
import Singleproduct from "./Singleproduct";
const AddCart = ({ product }) => {
  const { id, stock, colors } = product;
  console.log(stock);
  console.log(colors);
  const [colr, setcolor] = useState(colors[0]);

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
        {stock > 0 && <Counter stock={stock} />}
        <br />
        <button className="button-29">ADD TO CART</button>
      </div>
    </>
  );
};
export default AddCart;
