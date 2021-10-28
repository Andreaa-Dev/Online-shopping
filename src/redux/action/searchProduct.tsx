import { SearchProduct, SearchProductAction } from "../../misc/types";

export function searchProduct(userInput: string): SearchProductAction {
  return {
    type: SearchProduct,
    payload: {
      userInput: userInput,
    },
  };
}
