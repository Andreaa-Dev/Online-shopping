import { combineReducers } from "redux";
import { productReducer } from "./product";

const createRootReducer = () =>
  combineReducers({
    productState: productReducer,
  });
export default createRootReducer;
