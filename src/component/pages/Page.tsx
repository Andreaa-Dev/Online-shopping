import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { AppState } from "../../misc/types";
import { triggerSaga } from "../../redux/action/product";
import ProductItem from "./ProductItem";

function Page() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(triggerSaga());
  }, [dispatch]);

  const data = useSelector((state: AppState) => {
    console.log(state.productState, "p");
    return state.productState.product;
  });
  console.log(data, "a");

  return (
      {data.map((item)=>{
          return(<ProductItem item={item} />)}
      )}
  );
}

export default Page;
