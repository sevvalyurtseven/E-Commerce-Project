import { toast } from "react-toastify";
import {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  SET_ADDRESS,
  SET_PAYMENT,
  CLEAR_CART,
} from "../actions/shoppingCartActions";

const initialState = {
  cart: [],
  payment: {},
  address: {},
};

export const shoppingCartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      const existingProduct = state.cart.find(
        (item) => item.id === action.payload.id
      );

      if (existingProduct) {
        toast.error("You have already added this product to your cart!", {
          position: "bottom-center",
        });
        return state;
      }
      return { ...state, cart: [...state.cart, action.payload] };
    case REMOVE_FROM_CART:
      return {
        ...state,
        cart: state.cart.filter((item) => item.product.id !== action.payload),
      };
    case SET_PAYMENT:
      return { ...state, payment: action.payload };
    case SET_ADDRESS:
      return { ...state, address: action.payload };
    case CLEAR_CART:
      return { ...state, cart: initialState.cart };
    default:
      return state;
  }
};
