import {configureStore} from "@reduxjs/toolkit";
import {reducer} from "./reducer";
import {createAPI} from "../api/api";
import {redirectMiddleware} from "./middlewares";

export const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: createAPI()
      }
    }).concat(redirectMiddleware)
});
