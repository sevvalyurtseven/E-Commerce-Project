import { combineReducers } from "redux";
import { globalReducer } from "./globalReducer";
import { productReducer } from "./productReducer";
import { userReducer } from "./userReducer";
import { applyMiddleware } from "redux";
import { shoppingCartReducer } from "./shoppingCartReducer";

export const reducers = combineReducers({
    global: globalReducer,
    user: userReducer,
    product: productReducer,
    shoppingCart: shoppingCartReducer,
});

export const store = createStore(reducers, applyMiddleware(thunk, logger));