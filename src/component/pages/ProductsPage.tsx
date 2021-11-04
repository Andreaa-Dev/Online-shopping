import { Box } from "@mui/system";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { AppState } from "../../misc/types";
import { triggerSaga } from "../../redux/action/product";
import ProductItem from "./ProductItem";

export default function ProductsPage() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(triggerSaga());
  }, [dispatch]);

  const data = useSelector((state: AppState) => {
    console.log(state.productState, "p");
    return state.productState.product;
  });

  return (
    <Box
      sx={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr 1fr 1fr",
      }}
    >
      {data.map((item) => {
        return <ProductItem item={item} />;
      })}
    </Box>
  );
}
