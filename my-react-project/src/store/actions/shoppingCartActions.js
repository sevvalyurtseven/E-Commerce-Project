export const ADD_TO_CART = "ADD_TO_CART";
export const REMOVE_FROM_CART = "REMOVE_FROM_CART";
export const CLEAR_CART = "CLEAR_CART";
export const SET_PAYMENT = "SET_PAYMENT";
export const SET_ADDRESS = "SET_ADDRESS";
export const REMOVE_THIS_PRODUCT = "REMOVE_THIS_PRODUCT";
export const CHECKED_PRODUCT = "CHECKED_PRODUCT";

export const addToCart = (product) => ({
  type: ADD_TO_CART,
  payload: product,
});
export const removeFromCart = (productId) => ({
  type: REMOVE_FROM_CART,
  payload: productId,
});

export const removeThisProduct = (productId) => ({
  type: REMOVE_THIS_PRODUCT,
  payload: productId,
});

export const clearCart = () => ({ type: CLEAR_CART });

export const setPayment = (payment) => ({
  type: SET_PAYMENT,
  payload: payment,
});

export const setAddress = (address) => ({
  type: SET_ADDRESS,
  payload: address,
});

export const checkedProduct = (productId) => ({
  type: CHECKED_PRODUCT,
  payload: productId,
});
