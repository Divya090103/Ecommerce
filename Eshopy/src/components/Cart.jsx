import React, { useContext } from "react";
import Item from "./Item";
import { Cartcontext } from "../context/Cartcontext";
const Cart = () => {
  const { cart, shipping_fee } = useContext(Cartcontext);
  return (
    <>
      <section className="container">
        <div className="mt-5">
          <div className="d-flex justify-content-evenly">
            <h5>Item</h5>
            <h5 className="cart-hide">Price</h5>
            <h5>Quantity</h5>
            <h5 className="cart-hide">Subtotal</h5>
            <h5>Remove</h5>
          </div>
          <hr />
          <div className="cart-iem">
            {cart.map((curr) => {
              return <Item key={curr.id} {...curr} />;
            })}
          </div>
        </div>
      </section>
    </>
  );
};
export default Cart;
