// @ts-nocheck
import { takeLatest, put } from "redux-saga/effects";
import { FetchAction, TriggerSaga } from "../../misc/types";
import { fetchProductSuccess } from "../action/product";

// yield = async, put = dispatch

function* fetchProductSaga() {
  yield takeLatest(TriggerSaga, function* (action: FetchAction) {
    try {
      const productData = yield fetch(
        "https://makeup-api.herokuapp.com/api/v1/products.json"
      );
      const dataToJson = yield productData.json();
      yield put(fetchProductSuccess(dataToJson));
    } catch (error) {
      yield;
    }
  });
}
//takeLatest receive the action type and function. when take triggerSaga => fetchProductSaga to get data

export default fetchProductSaga;
