import {
  FetchAction,
  FetchProduct,
  ProductType,
  TriggerSaga,
} from "../../misc/types";

export function fetchProductSuccess(productData: ProductType[]): FetchAction {
  return {
    type: FetchProduct,
    payload: {
      product: productData,
    },
  };
}
//triggerSaga to fetch data
export function triggerSaga() {
  return {
    type: TriggerSaga,
  };
}
