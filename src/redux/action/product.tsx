import { Call } from "@mui/icons-material";
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

export function triggerSaga() {
  return {
    type: TriggerSaga,
  };
}
