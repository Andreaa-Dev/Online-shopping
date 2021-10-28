import { combineReducers } from "redux";
import { productState } from "./product";
import { addProduct } from "./addProduct";
import { removeProduct } from "./removeProduct";
import { fetchProduct } from "./product";

const createRootReduce = () =>
  combineReducers({
    productState: fetchProduct,
    addProduct: add,
    removeProduct: remove,
  });
export default createRootReduce;
