const CartReducer = (state, action) => {
  if (action.type === "ADD_TO_CART") {
    let { product, colr } = action.payload;
    let cartproduct = {
      id: product.id,
      image: product.images[0],
      clr: colr,
      stk: product.stock,
      name: product.name,
      price: product.price,
    };
    return {
      ...state,
      cart: [...state.cart, cartproduct],
    };
  }
  return state;
};
export default CartReducer;
