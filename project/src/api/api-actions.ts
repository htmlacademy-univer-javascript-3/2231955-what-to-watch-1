import {createAsyncThunk} from '@reduxjs/toolkit';
import {AppDispatch, State} from '../types/state';
import {AxiosInstance} from 'axios';
import {
  redirect,
} from '../store/action';
import {AuthCredentionals, UserInfo} from '../types/auth';
import {removeToken, setToken} from '../services/localstorage';
import {FilmInfo} from '../types/film-page';
import {Review} from '../types/review';
import {setGenres} from '../store/main-data/main-data';

export const fetchFilms = createAsyncThunk<FilmInfo[], undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'fetchFilms',
  async (_arg, {dispatch, extra: api}) => {
    const {data} = await api.get<FilmInfo[]>('/films');
    dispatch(setGenres(data));
    return data;

  },
);

export const fetchPromoFilm = createAsyncThunk<FilmInfo, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'fetchPromoFilm',
  async (_arg, {dispatch, extra: api}) => {
    const {data} = await api.get<FilmInfo>('/promo');
    return data;
  },
);
export const getAuthStatus = createAsyncThunk<UserInfo, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/checkAuthStatus',
  async (_arg, {dispatch, extra: api}) => {
    const {data} = await api.get<UserInfo>('/login');
    setToken(data.token);
    return data;
  },
);

export const loginAction = createAsyncThunk<UserInfo, AuthCredentionals, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'user/login',
  async ({email, password}, {dispatch, extra: api}) => {
    const {data} = await api.post<UserInfo>('/login', {email, password});
    setToken(data.token);
    return data;


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
  },
);

export const fetchFilm = createAsyncThunk<FilmInfo, string, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'film/fetchFilm',
  async (filmId, {extra: api}) => {
    const {data} = await api.get<FilmInfo>(`/films/${filmId}`);
    return data;
  },
);

export const fetchSimilarFilms = createAsyncThunk<FilmInfo[], string, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'film/getSimilarFilms',
  async (filmId, {extra: api}) => {
    const {data} = await api.get<FilmInfo[]>(`/films/${filmId}/similar`);
    return data;
  },
);

export const getReviews = createAsyncThunk<Review[], string, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'film/getReviews',
  async (filmId, {extra: api}) => {
    const {data} = await api.get<Review[]>(`/comments/${filmId}`);
    return data;
  },
);

export const postReview = createAsyncThunk<Review[], {filmId: number; comment: string; rating: number}, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'film/postReview',
  async ({filmId, comment, rating}, {dispatch, extra: api}) => {

    const {data} = await api.post<Review[]>(`/comments/${filmId}`, {comment, rating});
    dispatch(redirect(`/films/${filmId}`));
    return data;
  }
);

export const fetchFavouriteFilms = createAsyncThunk<FilmInfo[], undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'film/favorite',
  async (_args, {extra: api}) => {

    const {data} = await api.get<FilmInfo[]>('/favorite');
    return data;
  }
);

export const changeFilmStatus = createAsyncThunk<FilmInfo, {filmId: number; status: number}, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'film/changeStatus',
  async ({filmId, status}, {extra: api}) => {
    const {data} = await api.post<FilmInfo>(`/favorite/${filmId}/${status}`, {filmId, status});
    return data;
  }
);
