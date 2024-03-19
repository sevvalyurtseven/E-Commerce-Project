import { toast } from "react-toastify";
import {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  SET_ADDRESS,
  SET_PAYMENT,
  REMOVE_THIS_PRODUCT,
  CLEAR_CART,
  CHECKED_PRODUCT,
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
        (item) => item.product.id === action.payload.id
      );

      if (existingProduct) {
        localStorage.setItem(
          "shoppingCart",
          JSON.stringify({
            ...state,
            cart: state.cart.map((item) =>
              item.product.id === action.payload.id
                ? { ...item, count: item.count + 1 }
                : item
            ),
          })
        );
        return {
          ...state,
          cart: state.cart.map((item) =>
            item.product.id === action.payload.id
              ? { ...item, count: item.count + 1 }
              : item
          ),
        };
      } else {
        localStorage.setItem(
          "shoppingCart",
          JSON.stringify({
            ...state,
            cart: [
              ...state.cart,
              { product: action.payload, count: 1, checked: false },
            ],
          })
        );
        return {
          ...state,
          cart: [
            ...state.cart,
            { product: action.payload, count: 1, checked: false },
          ],
        };
      }

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
    case CHECKED_PRODUCT:
      const checkedItemId = action.payload.id;
      const updatedCartt = state.cart.map((item) => {
        if (item.product.id === checkedItemId) {
          return { ...item, checked: !item.checked };
        }
        return item;
      });

      localStorage.setItem(
        "shoppingCart",
        JSON.stringify({ ...state, cart: updatedCartt })
      );

      return {
        ...state,
        cart: updatedCartt,
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
