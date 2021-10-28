import { AddProduct, AddProductAction, ProductType } from "../../misc/types";

export function addProduct(id: number): AddProductAction {
  return {
    type: AddProduct,
    payload: {
      id,
    },
  };
}
