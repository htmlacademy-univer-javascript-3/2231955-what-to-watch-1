import {combineReducers} from '@reduxjs/toolkit';
import {NameSpace} from '../types/state';
import {filmData} from './film-data/film-data';
import {mainData} from './main-data/main-data';
import {authProcess} from './auth-process/auth-process';
import {favoriteData} from './favorite-data/favorite-data';

export const rootReducer = combineReducers({
  [NameSpace.Film]: filmData.reducer,
  [NameSpace.Main]: mainData.reducer,
  [NameSpace.Auth]: authProcess.reducer,
  [NameSpace.Favorite]: favoriteData.reducer
});
