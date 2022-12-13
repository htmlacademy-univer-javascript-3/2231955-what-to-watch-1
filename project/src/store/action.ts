import {createAction} from '@reduxjs/toolkit';

export const changeGenre = createAction('changeGenre', (genre) => ({
  payload: genre
}));

export const getFilmsByGenre = createAction('getFilmsByGenre');
