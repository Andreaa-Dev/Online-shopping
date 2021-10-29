import { actionChannel } from "@redux-saga/core/effects";
import { AllAction, FetchProduct, ProductState } from "../../misc/types";

const initialState: ProductState = { product: [], search: [] };

export function fetchProduct(state = initialState, action: AllAction) {
  switch (action.type) {
    case FetchProduct:
      return {
        ...state,
        product: action.payload,
      };
    case SearchProduct:
      return {
        ...state,
      };
  }
}
