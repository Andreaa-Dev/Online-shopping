import { Satellite } from "@mui/icons-material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppState } from "../../misc/types";

function Page() {
  const dispatch = useDispatch();
  const state = useSelector((state: AppState) => {
    return state.productState.product;
  });
  return (
    <div>
      <h1>hi</h1>
    </div>
  );
}

export default Page;
