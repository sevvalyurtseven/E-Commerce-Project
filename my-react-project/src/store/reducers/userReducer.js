/* {
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjIxLCJpYXQiOjE3MDM4NDM5MTEsImV4cCI6MTcwNTQ4NTUxMX0.KXpQ8PrJLqAFFj1ZPKy6qlLIr6wgAT6jzXgXUJzxNM8",
  "name": "Cust Omer",
  "email": "customer@commerce.com",
  "role_id": "3"
} */

import { LOGIN_USER, LOGOUT_USER } from "../actions/userActions";

const initialState = {
  user: {
    name: null,
    email: null,
    token: null,
    role_id: "3",
  },
  isLoggedIn: false,
};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_USER:
      return { ...state, user: action.payload, isLoggedIn: true };
    case LOGOUT_USER:
      return {
        ...state,
        user: {},
        isLoggedIn: false,
      };
    default:
      return state;
  }
};
