import { toast } from "react-toastify";
import {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  SET_ADDRESS,
  SET_PAYMENT,
  REMOVE_THIS_PRODUCT,
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
      const updatedCart = [...state.cart];
      const productIndex = updatedCart.findIndex(
        (item) => item.product.id === action.payload.id
      );

      if (productIndex !== -1) {
        updatedCart[productIndex] = {
          ...updatedCart[productIndex],
          count: updatedCart[productIndex].count + 1,
        };
      } else {
        updatedCart.push({
          count: 1,
          product: action.payload,
        });
      }
      return { ...state, cart: updatedCart };

    case REMOVE_FROM_CART:
      const newCart = state.cart
        .map((item) =>
          item.product.id === action.payload.id
            ? { ...item, count: item.count > 1 ? item.count - 1 : 0 }
            : item
        )
        .filter((item) => item.count > 0);

      return {
        ...state,
        cart: newCart,
      };

    case SET_PAYMENT:
      return { ...state, payment: action.payload };

    case SET_ADDRESS:
      return { ...state, address: action.payload };

    case CLEAR_CART:
      return { ...state, cart: initialState.cart };

    case REMOVE_THIS_PRODUCT:
      const t = state.cart.map((item) => {
        if (item.product.id === action.payload) {
          // Update count to 0 for the removed product
          return { ...item, count: 0 };
        }
        return item;
      });

      return {
        ...state,
        cart: t.filter((item) => item.count > 0), // Remove items with count 0
      };

    default:
      return state;
  }
};
