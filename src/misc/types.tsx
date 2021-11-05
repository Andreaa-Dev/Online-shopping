export type ProductType = {
  name: string;
  brand: string;
  price: string;
  description: string;
  api_featured_image: string;
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
    product: ProductType;
  };
};

export type RemoveProductAction = {
  type: typeof RemoveProduct;
  payload: {
    product: ProductType;
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

//state
export type ProductState = {
  product: ProductType[];
  search: ProductType[];
};

export type AppState = {
  productState: ProductState;
};
