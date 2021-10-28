import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {AppState} from "../../misc/types"

function Page() {
  const dispatch = useDispatch();
  const state = useSelector((state: AppState) => return state.);
  return <div></div>;
}

export default Page;
