import {FilmData, NameSpace} from '../../types/state';
import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {fetchFilm, getReviews, fetchSimilarFilms, postReview} from '../../api/api-actions';
import {useAppDispatch} from '../../hooks';
import {Urls} from '../../types/urls';
import {redirect} from '../action';

const initialState: FilmData = {
  film: null,
  similarFilms: [],
  reviews: [],
  postReviewError: null,
  isLoaded: false
};

export const filmData = createSlice({
  name: NameSpace.Film,
  initialState,
  reducers: {
    setPostReviewError: (state, action: PayloadAction<string | null>) => {
      state.postReviewError = action.payload;
    }
  },
  extraReducers(builder) {
    builder
      .addCase(fetchFilm.fulfilled, (state, action) => {
        state.film = action.payload;
        state.isLoaded = true;

      })
      .addCase(fetchFilm.rejected, (state) => {
        console.log("asd")
        state.film = null;
        state.isLoaded = true;

      })
      .addCase(fetchSimilarFilms.fulfilled, (state, action) => {
        state.similarFilms = action.payload;
      })
      .addCase(fetchSimilarFilms.pending, (state) => {
        state.similarFilms = [];
      })
      .addCase(fetchSimilarFilms.rejected, (state) => {
        state.similarFilms = [];
      })
      .addCase(getReviews.fulfilled, (state, action) => {
        state.reviews = action.payload;
      })
      .addCase(postReview.pending, (state) => {
        state.postReviewError = null;
      })
      .addCase(postReview.fulfilled, (state, action) => {
        state.reviews = action.payload;
      })
      .addCase(postReview.rejected, (state) => {
        state.postReviewError = 'Что-то пошло не так';
      });
  },
});


