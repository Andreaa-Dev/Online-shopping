import { RemoveProduct, RemoveProductAction } from "../../misc/types";

export function removeProduct(id: number): RemoveProductAction {
  return {
    type: RemoveProduct,
    payload: {
      id,
    },
  };
}
