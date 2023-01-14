import {MainData, NameSpace} from "../../types/state";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {filterFilmsByGenre} from "../../services/films";
import {fetchFilms, fetchPromoFilm} from "../../api/api-actions";
import {FilmInfo} from "../../types/film-page";

const initialState: MainData = {
  films: [],
  promoFilm: null,
  genres: ['All Genres'],
  currentGenre: 'All Genres',
  isFilmsLoaded: false,
  currentFilms:[],
  count: 0
};

export const mainData = createSlice({
  name: NameSpace.MainScreen,
  initialState,
  reducers: {
    setGenres: (state,  action: PayloadAction<FilmInfo[]>) => {
      const genres = new Set<string>(['All Genres']);
      for (const film of action.payload){
        genres.add(film.genre);
      }
      state.genres = Array.from(genres);
    },
    changeGenre: (state, action: PayloadAction<string>) => {
      const currentFilms = filterFilmsByGenre(state.films, action.payload);
      state.currentGenre = action.payload;
      state.currentFilms = currentFilms
      state.count = currentFilms.length < 8 ? currentFilms.length : 8;
    },
    resetCount: (state) => {
      state.count = state.currentFilms.length < 8 ? state.currentFilms.length : 8;
    },
    showMore: (state) => {
        state.count = (state.count + 8) < state.currentFilms.length ?
        state.count + 8 :
        state.currentFilms.length;    }
  },
  extraReducers(builder) {
    builder
      .addCase(fetchFilms.fulfilled, (state, action) => {
        state.isFilmsLoaded = true;
        state.films = action.payload;
        state.currentFilms = action.payload
        state.count = 8
      })
      .addCase(fetchFilms.pending, (state) => {
        state.isFilmsLoaded = false;
      })
      .addCase(fetchPromoFilm.fulfilled, (state, action) => {
        state.promoFilm = action.payload;
      })

  }
});

export const {setGenres, changeGenre, resetCount, showMore} = mainData.actions;
