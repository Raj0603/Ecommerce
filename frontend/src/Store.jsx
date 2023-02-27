import { legacy_createStore ,combineReducers, applyMiddleware} from "redux"
// import { configureStore } from '@reduxjs/toolkit'
import thunk from "redux-thunk"
import {composeWithDevTools} from "redux-devtools-extension"
import { productReducer } from "./reducers/productReducer";

const reducer = combineReducers({
    products:productReducer,
});

let initialState={};

const middleWare =[thunk];

const store = legacy_createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleWare))
);

export default store;
