const CartReducer = (state, action) => {
  if (action.type === "ADD_TO_CART") {
    let { arr, id, color } = action.payload;
    console.log(color);
  }
  return state;
};
export default CartReducer;
