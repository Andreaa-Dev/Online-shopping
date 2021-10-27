import { FetchAction, FetchProduct, ProductType } from "../../misc/types";

export function fetchProduct(productData: ProductType[]): FetchAction {
  return {
    type: FetchProduct,
    payload: {
      product: productData,
    },
  };
}
