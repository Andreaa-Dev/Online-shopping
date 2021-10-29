import { TurnedInTwoTone } from "@mui/icons-material";

export type ProductType = {
  name: string;
  brand: string;
  price: string;
};

//action type
export const FetchProduct = "fetchProduct";
export const AddProduct = "addProduct";
export const RemoveProduct = "removeProduct";
export const SearchProduct = "searchProduct";
export const TriggerSaga = "triggerSaga";

export type FetchAction = {
  type: typeof FetchProduct;
  payload: {
    product: ProductType[];
  };
};

export type AddProductAction = {
  type: typeof AddProduct;
  payload: {
    id: number;
  };
};

export type RemoveProductAction = {
  type: typeof RemoveProduct;
  payload: {
    id: number;
  };
};

export type SearchProductAction = {
  type: typeof SearchProduct;
  payload: {
    userInput: string;
  };
};

export type TriggerSagaAction = {
  type: typeof TriggerSaga;
};

export type AllAction =
  | FetchAction
  | AddProductAction
  | RemoveProductAction
  | SearchProductAction;

export type ProductState = {
  product: ProductType[];
  search: ProductType[];
};

//state
