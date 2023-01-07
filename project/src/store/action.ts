import {createAction} from '@reduxjs/toolkit';
import {FilmInfo} from "../types/film-page";
import {AuthStatus, UserInfo} from "../types/auth";
import {userInfo} from "os";
import {Review} from "../types/review";

export const changeGenre = createAction('changeGenre', (genre) => ({
  payload: genre
}));

export const getFilmsByGenre = createAction('getFilmsByGenre');
export const resetCountFilms = createAction('resetCountFilms');
export const showMoreFilms = createAction('showMoreFilms');

export const setGenres = createAction('setGenres');
export const loadPromoFilm = createAction('loadPromoFilm', (film: FilmInfo) => ({payload: film}));
export const setFilmsLoadingStatus = createAction('setFilmsLoadingStatus', (isLoaded: boolean) => ({payload: isLoaded}));
export const setAuthStatus = createAction('setAuthStatus', (authStatus: AuthStatus) => ({payload: authStatus}));
export const setUser = createAction('setUser', (user: UserInfo) => ({payload: user}));

export const loadFilms = createAction('loadFilms', (films: FilmInfo[]) => ({payload: films}));

export const loadFilm = createAction('film/setFilm', (film: FilmInfo | null) => ({payload: film}));

export const loadSimilarFilms = createAction('film/setSimilarFilms', (films: FilmInfo[]) => ({payload: films}));

export const loadReviews = createAction('film/setReviews', (reviews: Review[]) => ({payload: reviews}));

export const setPostReviewError = createAction('film/setPostReviewError', (error: string | null) => ({payload: error}));
export const redirect = createAction<string>('redirect');





