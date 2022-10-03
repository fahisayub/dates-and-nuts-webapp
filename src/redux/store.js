import { applyMiddleware, combineReducers, compose, legacy_createStore } from "redux";
import thunk from "redux-thunk";
import { adminAuthReducer } from "./adminAuth/reducer";
import { cartReducer } from "./cart/reducer";
import { ordersReducer } from "./orders/reducer";
import { productReducer } from "./products/reducer";
import { userAuthReducer } from "./userAuth/reducer";


const rootReducer=combineReducers({
    productReducer:productReducer,
    userAuthReducer:userAuthReducer,
    adminAuthReducer:adminAuthReducer,
    cartReducer:cartReducer,
    ordersReducer:ordersReducer,
})
const composeEnhancer=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||compose;
export const store=legacy_createStore( rootReducer,composeEnhancer(applyMiddleware(thunk)));