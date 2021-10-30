import { AddProduct, AddProductAction, ProductType } from "../../misc/types";

export function addProduct(product: ProductType): AddProductAction {
  return {
    type: AddProduct,
    payload: {
      product,
    },
  };
}
