import {
  AddProduct,
  AllAction,
  FetchProduct,
  ProductState,
  RemoveProduct,
  SearchProduct,
} from "../../misc/types";

const initialState: ProductState = { product: [], search: [] };

export function productReducer(
  state = initialState,
  action: AllAction
): ProductState {
  switch (action.type) {
    case FetchProduct:
      return {
        ...state,
        product: action.payload.product,
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
        product: [...state.product, action.payload.product],
      };
    //state: whole state search,add,remove
    case RemoveProduct:
      return {
        ...state,
        product: state.product.filter((item) => {
          return item! === action.payload.product;
        }),
      };
    default:
      return state;
  }
}
