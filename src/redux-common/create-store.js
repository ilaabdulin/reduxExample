import { createStore, applyMiddleware } from "redux";
import { rootReducer } from "../redux-common/store";
// import logger from "redux-logger";

//Научит redux выполнять асинхронные вызовы
const thunk = store => next => action => {
  if (typeof action === "function") {
    action(store.dispatch, store.getState);
    return;
  }
  next(action);
};

export const store = createStore(rootReducer, applyMiddleware(thunk));
