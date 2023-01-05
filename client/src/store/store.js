import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import thunk from "redux-thunk";
import { authReducer } from "./auth/auth.reducer";
import { productReducer } from "./product/product.reducer";

const rootreducer = combineReducers({
  product: productReducer,
  auth: authReducer,
});
export const store = legacy_createStore(rootreducer, applyMiddleware(thunk));
