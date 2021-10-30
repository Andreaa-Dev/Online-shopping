import {
  ProductType,
  RemoveProduct,
  RemoveProductAction,
} from "../../misc/types";

export function removeProduct(product: ProductType): RemoveProductAction {
  return {
    type: RemoveProduct,
    payload: {
      product,
    },
  };
}
