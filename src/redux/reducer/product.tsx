import { actionChannel } from "@redux-saga/core/effects";
import {
  AddProduct,
  AllAction,
  FetchProduct,
  ProductState,
  RemoveProduct,
  SearchProduct,
} from "../../misc/types";

const initialState: ProductState = { product: [], search: [] };

export function fetchProduct(state = initialState, action: AllAction) {
  switch (action.type) {
    case FetchProduct:
      return {
        ...state,
        product: action.payload,
      };
    case SearchProduct:
      const filteredResult = state.product.filter((product) => {
        return product.name
          .toLocaleLowerCase()
          .includes(action.payload.userInput);
      });
      return {
        ...state,
        search: filteredResult,
      };

    case AddProduct:
      return {
        ...state,
        product: [...state.product, action.payload.id],
      };
    case RemoveProduct:
      return {
        ...state,
        removedPr,
      };
  }
}
