import {Genre} from "../types/genre";
import {FilmInfo} from "../types/film-page";
import {createReducer} from "@reduxjs/toolkit";
import {
  changeGenre,
  getFilmsByGenre,
  loadFilms,
  loadPromoFilm,
  resetCountFilms, setAuthStatus, setFilmsLoadingStatus,
  setGenres, setUser, showMoreFilms
} from "./action";
import {filterFilmsByGenre} from "../services/films";
import {AuthStatus, UserInfo} from "../types/auth";

export type InitState = {
  genre: string,
  genres:string[];
  promoFilm: FilmInfo | null;
  films: FilmInfo[],
  currentFilms: FilmInfo[]
  count: number,
  isFilmsLoaded: boolean,
  authStatus: AuthStatus
  user: UserInfo | null
}

const initialState: InitState = {
  genre: 'All Genres',
  promoFilm: null,
  genres: [],
  films: [],
  currentFilms: [],
  count: 0,
  isFilmsLoaded: false,
  authStatus: AuthStatus.Unknown,
  user: null
}

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(loadFilms, (state, action) => {
      state.films = action.payload;
      state.currentFilms = action.payload
      state.count = 8
    })
    .addCase(changeGenre, (state, action) => {
      const currentFilms = filterFilmsByGenre(state.films, action.payload);
      state.genre = action.payload;
      state.currentFilms = currentFilms
      state.count = currentFilms.length < 8 ? currentFilms.length : 8;
    })
    .addCase(resetCountFilms, (state) => {
      state.count = state.currentFilms.length < 8 ? state.currentFilms.length : 8;
    })
    .addCase(showMoreFilms, (state) => {
      state.count = (state.count + 8) < state.currentFilms.length ?
        state.count + 8 :
        state.currentFilms.length;

    })

    .addCase(loadPromoFilm, (state, action) => {
      state.promoFilm = action.payload;
    })
    .addCase(setGenres, (state) => {
      const genres = new Set<string>(['All Genres']);
      for (const film of state.films){
        genres.add(film.genre);
      }
      state.genres = Array.from(genres);
    })
    .addCase(setFilmsLoadingStatus, (state, action) => {
      state.isFilmsLoaded = action.payload;
    })
    .addCase(setAuthStatus, (state, action) => {
      state.authStatus = action.payload;
    })
    .addCase(setUser, (state, action) => {
      state.user = action.payload;
    });



});
