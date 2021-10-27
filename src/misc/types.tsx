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

export type FetchAction = {
  type: typeof FetchProduct;
  payload: {
    product: ProductType[];
  };
};

export type AddProductAction = {
  type: typeof AddProduct;
  // payload: {

  // }
};

export type RemoveProductAction = {
  type: typeof RemoveProduct;
};

export type SearchProductAction = {
  type: typeof SearchProduct;
};

export type AllAction = FetchAction | AddProductAction | RemoveProductAction;

export type ProductState = {
  product: ProductType[];
  search: ProductType[];
};
