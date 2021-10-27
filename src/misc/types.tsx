export type ProductType = {
  name: string;
  brand: string;
  price: string;
};

//action type
export const FetchProduct = "fetchProduct";
export const AddProduct = "addProduct";
export const RemoveProduct = "removeProduct";
