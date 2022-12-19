import {createAsyncThunk} from "@reduxjs/toolkit";
import {AppDispatch, State} from "../types/state";
import {AxiosInstance} from "axios";
import {loadFilms, loadPromoFilm, setFilmsLoadingStatus, setGenres} from "../store/action";

export const fetchFilms = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'fetchFilms',
  async (_arg, {dispatch, extra: api}) => {
    const {data} = await api.get('/films');
    dispatch(setFilmsLoadingStatus(false));
    dispatch(loadFilms(data));
    dispatch(setGenres());
    dispatch(setFilmsLoadingStatus(true));

  },
);

export const fetchPromoFilm = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'fetchPromoFilm',
  async (_arg, {dispatch, extra: api}) => {
    const {data} = await api.get('/promo');
    dispatch(loadPromoFilm(data));
  },
);
