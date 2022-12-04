import {Genre} from "../types/genre";
import {FilmInfo} from "../types/film-page";
import {films} from "../mocks/films";
import {createReducer} from "@reduxjs/toolkit";
import {changeGenre, getFilmsByGenre} from "./action";
import {filterFilmsByGenre} from "../utils/film-servies";

export type InitState = {
  genre: Genre,
  films: FilmInfo[]
}

const initialState: InitState = {genre: Genre.All, films: films}

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeGenre, (state, action) => {
      state.genre = action.payload;
    })
    .addCase(getFilmsByGenre, (state) => {
      state.films = filterFilmsByGenre(films, state.genre);
    });
});
