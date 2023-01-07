import {reducer} from "./reducer";
import {Middleware} from "@reduxjs/toolkit";
import browserHistory from "../browser-history";

type Reducer = ReturnType<typeof reducer>;

export const redirectMiddleware: Middleware<unknown, Reducer> =
  (_store) =>
    (next) =>
      (action) => {
        if (action.type === 'redirect') {
          browserHistory.push(action.payload);
        }

        return next(action);
      };
