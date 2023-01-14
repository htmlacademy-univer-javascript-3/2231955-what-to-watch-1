import {createSlice} from '@reduxjs/toolkit';
import {FavoriteData, NameSpace} from '../../types/state';
import {changeFilmStatus, fetchFavouriteFilms, logout} from '../../api/api-actions';

const initialState: FavoriteData = {
  favorite: [],
  favoriteCount: 0,
  favoriteFilm: null,
};

export const favoriteData = createSlice({
  name: NameSpace.Favorite,
  initialState,
  reducers: {
  },
  extraReducers(builder) {
    builder
      .addCase(fetchFavouriteFilms.fulfilled, (state, action) => {
        state.favorite = action.payload;
        state.favoriteCount = action.payload.length;
      })
      .addCase(changeFilmStatus.pending, (state) => {
        state.favoriteFilm = null;
      })
      .addCase(changeFilmStatus.fulfilled, (state, action) => {
        const isInList = action.payload.isFavorite;
        state.favoriteCount += isInList ? 1 : -1;
        state.favoriteFilm = {id: action.payload.id, status: action.payload.isFavorite};
      })
      .addCase(logout.fulfilled, (state) => {
        state.favorite = [];
        state.favoriteCount = 0;
        state.favoriteFilm = null;
      });
  }
});
