import {createAsyncThunk} from "@reduxjs/toolkit";
import {AppDispatch, State} from "../types/state";
import {AxiosInstance} from "axios";
import {
  loadFilms,
  loadPromoFilm, redirect,
  setAuthStatus,
  loadFilm,
  setFilmsLoadingStatus,
  setGenres, setPostReviewError, loadReviews, loadSimilarFilms,
  setUser
} from "../store/action";
import {AuthCredentionals, AuthStatus, UserInfo} from "../types/auth";
import {removeToken, setToken} from "../services/localstorage";
import {Urls} from "../types/urls";
import {FilmInfo} from "../types/film-page";
import {Review} from "../types/review";

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

export const getFilm = createAsyncThunk<void, string | undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'film/getFilm',
  async (filmId, {dispatch, extra: api}) => {
    try {
      if (filmId !== undefined) {
        dispatch(loadFilm(null));
        const {data} = await api.get(`/films/${filmId}`);
        dispatch(loadFilm(data));
      }
    } catch {
      dispatch(redirect(Urls.NotFound));
    }
  },
);

export const getSimilarFilms = createAsyncThunk<void, string | undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'film/getSimilarFilms',
  async (filmId, {dispatch, extra: api}) => {
    if (filmId !== undefined) {
      const {data} = await api.get<FilmInfo[]>(`/films/${filmId}/similar`);
      dispatch(loadSimilarFilms(data));
    }
  },
);

export const getReviews = createAsyncThunk<void, string | undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'film/getReviews',
  async (filmId, {dispatch, extra: api}) => {
    if (filmId !== undefined) {
      const {data} = await api.get<Review[]>(`/comments/${filmId}`);
      dispatch(loadReviews(data));
    }
  },
);

export const postReview = createAsyncThunk<void, {filmId: number; comment: string; rating: number}, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'film/postReview',
  async ({filmId, comment, rating}, {dispatch, extra: api}) => {
    try {
      dispatch(setPostReviewError(null));
      const {data} = await api.post(`/comments/${filmId}`, {comment, rating});
      dispatch(loadReviews(data));
      dispatch(redirect(`/films/${filmId}`));
    } catch {
      dispatch(setPostReviewError('Что-то пошло не так'));
    }
  }
);
