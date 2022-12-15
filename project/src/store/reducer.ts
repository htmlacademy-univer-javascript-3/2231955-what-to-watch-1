import {Genre} from "../types/genre";
import {FilmInfo} from "../types/film-page";
import {films} from "../mocks/films";
import {createReducer} from "@reduxjs/toolkit";
import {changeGenre, getFilmsByGenre, resetCountFilms, setCountFilms} from "./action";
import {filterFilmsByGenre} from "../utils/film-servies";
import {stat} from "fs";

export type InitState = {
  genre: Genre,
  films: FilmInfo[],
  count: number,
  totalCount: number
}

const initialState: InitState = {genre: Genre.All, films: films, count: films.length > 8 ? 8: films.length, totalCount: films.length > 8 ? 8: films.length}

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeGenre, (state, action) => {
      state.genre = action.payload;
    })
    .addCase(getFilmsByGenre, (state) => {
      state.films = filterFilmsByGenre(films, state.genre);
      state.count = films.length > 8 ? 8: films.length
      state.totalCount = state.films.length
    })
    .addCase(setCountFilms, (state) => {
      console.log(state.count)
      state.count = state.count + 8;
      state.totalCount = state.films.length
    })
    .addCase(resetCountFilms, (state) => {
      state.count = initialState.count
      state.totalCount = initialState.totalCount
      state.genre = initialState.genre
      state.films = initialState.films
    });
});
