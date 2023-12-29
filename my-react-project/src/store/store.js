import { combineReducers } from "redux";
import { globalReducer } from "./reducers/globalReducer";
import { productReducer } from "./reducers/productReducer";
import { userReducer } from "./reducers/userReducer";
import { applyMiddleware } from "redux";
import { shoppingCartReducer } from "./reducers/shoppingCartReducer";
import { thunk } from "redux-thunk";
import logger from "redux-logger";
import { legacy_createStore } from "redux";

export const reducers = combineReducers({
    global: globalReducer,
    user: userReducer,
    product: productReducer,
    shoppingCart: shoppingCartReducer,
});

export const store = legacy_createStore(reducers, applyMiddleware(thunk, logger));