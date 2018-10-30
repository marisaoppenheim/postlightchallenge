import { createStore, applyMiddleware } from "redux";
import axios from "axios";
import campusReducer from "./reducers";
import loggingMiddleware from "redux-logger";
import thunkMiddleware from "redux-thunk";

export default createStore(
  campusReducer,
  applyMiddleware(
    thunkMiddleware.withExtraArgument({ axios }),
    loggingMiddleware
  )
);
