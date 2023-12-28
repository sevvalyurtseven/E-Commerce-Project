import { combineReducers } from "redux";
import { globalReducer } from "./globalReducer";
import { productReducer } from "./productReducer";
import { userReducer } from "./userReducer";
import { applyMiddleware } from "redux";

export const reducers = combineReducers({
    global: globalReducer,
    user: userReducer,
    product: productReducer,
});

export const store = createStore(reducers, applyMiddleware(thunk, logger));