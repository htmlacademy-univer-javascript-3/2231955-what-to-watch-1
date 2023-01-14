import {NameSpace, State} from '../../types/state';
import {FilmInfo} from '../../types/film-page';

export const getFilms = (state: State): FilmInfo[] => state[NameSpace.Main].films;

export const getCurrentFilms = (state: State): FilmInfo[] => state[NameSpace.Main].currentFilms;

export const getPromoFilm = (state: State): FilmInfo | null => state[NameSpace.Main].promoFilm;

export const getGenres = (state: State): string[] => state[NameSpace.Main].genres;

export const getSelectedGenre = (state: State): string => state[NameSpace.Main].currentGenre;

export const getIsLoading = (state: State): boolean => state[NameSpace.Main].isFilmsLoaded;

export const getCount = (state: State): number => state[NameSpace.Main].count;
