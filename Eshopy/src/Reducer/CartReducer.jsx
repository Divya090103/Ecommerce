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
      totlamt: state.totlamt + cartproduct.price,
    };
  }
  if (action.type === "REMOVE") {
    let del = 0;
    let itemToRemove = state.cart.find((item) => item.id === action.payload);
    del = itemToRemove ? itemToRemove.price : 0;
    console.log(del);
    let updatecart = state.cart.filter((curr) => curr.id != action.payload);
    return {
      ...state,
      cart: updatecart,
      totlamt: state.totlamt - del,
    };
  }
  return state;
};
export default CartReducer;
