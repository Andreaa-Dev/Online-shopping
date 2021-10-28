import createSagaMiddleware from "@redux-saga/core";
import { createStore, compose } from "redux";

export default function makeStore(initialState = initial) {
  const sagaMiddleware = createSagaMiddleware();
  const middlewares = sagaMiddleware;
  let composeEnhancers = compose;

  if (process.env.NODE_ENV === "development") {
    if ((window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) {
      composeEnhancers = (window as any)._REDUX_DEVTOOLS_EXTENSION_COMPOSE__;
    }
  }

  const store = createStore();
}
