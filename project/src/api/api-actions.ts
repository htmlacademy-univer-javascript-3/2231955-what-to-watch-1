import {createAsyncThunk} from "@reduxjs/toolkit";
import {AppDispatch, State} from "../types/state";
import {AxiosInstance} from "axios";
import {loadFilms, loadPromoFilm, setAuthStatus, setFilmsLoadingStatus, setGenres, setUser} from "../store/action";
import {AuthCredentionals, AuthStatus, UserInfo} from "../types/auth";
import {removeToken, setToken} from "../services/localstorage";

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
export const getAuthStatus = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/checkAuthStatus',
  async (_arg, {dispatch, extra: api}) => {
    try {
      const {data} = await api.get<UserInfo>('/login');
      setToken(data.token);
      dispatch(setUser(data));
      console.log(data.token)
      dispatch(setAuthStatus(AuthStatus.Authorized));
    } catch {
      dispatch(setAuthStatus(AuthStatus.Unauthorized));
    }
  },
);

export const loginAction = createAsyncThunk<void, AuthCredentionals, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'user/login',
  async ({email, password}, {dispatch, extra: api}) => {
    try {
      const {data} = await api.post<UserInfo>('/login', {email, password});
      setToken(data.token);
      dispatch(setUser(data));
      dispatch(setAuthStatus(AuthStatus.Authorized));
    } catch {
      dispatch(setAuthStatus(AuthStatus.Unauthorized));
      // throw new Error();
    }
  },
);

export const logout = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/logout',
  async (_arg, {dispatch, extra: api}) => {
    await api.delete('/logout');
    removeToken();
    dispatch(setAuthStatus(AuthStatus.Unauthorized));
  },
);
