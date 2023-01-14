import {configureStore} from "@reduxjs/toolkit";
import {rootReducer} from "./root-reducer";
import {createAPI} from "../api/api";
import {redirectMiddleware} from "./middlewares";

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: createAPI()
      }
    }).concat(redirectMiddleware)
});
