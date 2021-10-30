import createSagaMiddleware from "@redux-saga/core";
import { createStore, compose, applyMiddleware } from "redux";
import { AppState } from "../../misc/types";
import createRootReduce from "../reducer";

const initialAppState: AppState = {
  productState: {
    product: [],
    search: [],
  },
};
export default function makeStore(initialState = initialAppState) {
  const sagaMiddleware = createSagaMiddleware();
  const middlewares = sagaMiddleware;
  //   let composeEnhancers = compose;
  //   if (process.env.NODE_ENV === "development") {
  //     if ((window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) {
  //       composeEnhancers = (window as any)._REDUX_DEVTOOLS_EXTENSION_COMPOSE__;
  //     }
  //   }
  const composeEnhancers =
    (process.env.NODE_ENV === "development" &&
      (window as any)?.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
    compose;
  const store = createStore(
    createRootReduce,
    initialAppState,
    composeEnhancers(applyMiddleware(middlewares))
  );
  if ((module as any).hot) {
    (module as any).hot.accept("../reducer", () => {
      const nextReducer = require("../reducer").default;
      store.replaceReducer(nextReducer);
    });
  }
  return store;
}
