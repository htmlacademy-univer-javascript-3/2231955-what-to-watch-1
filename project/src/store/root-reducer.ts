import {combineReducers, createReducer} from "@reduxjs/toolkit";
import {NameSpace} from "../types/state";
import {filmData} from "./film-data/film-data";
import {mainData} from "./main-data/main-data";
import {authProcess} from "./auth-process/auth-process";

export const rootReducer = combineReducers({
  [NameSpace.FilmScreen]: filmData.reducer,
  [NameSpace.MainScreen]: mainData.reducer,
  [NameSpace.Auth]: authProcess.reducer,
});
