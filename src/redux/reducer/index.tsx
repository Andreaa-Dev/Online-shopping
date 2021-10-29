import { combineReducers } from "redux";
import { fetchProduct } from "./product";

const createRootReduce = () =>
  combineReducers({
    productState: fetchProduct,
  });
export default createRootReduce;
