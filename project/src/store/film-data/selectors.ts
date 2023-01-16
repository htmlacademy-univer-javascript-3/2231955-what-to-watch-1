import {NameSpace, State} from '../../types/state';
import {FilmInfo} from '../../types/film-page';
import {Review} from '../../types/review';

export const getFilm = (state: State): FilmInfo | null => state[NameSpace.Film].film;

export const getSimilarFilms = (state: State): FilmInfo[] => state[NameSpace.Film].similarFilms;

export const getReviews = (state: State): Review[] => state[NameSpace.Film].reviews;
export const getLoadedStatus = (state: State): boolean => state[NameSpace.Film].isLoaded;


