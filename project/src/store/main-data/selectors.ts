import {NameSpace, State} from "../../types/state";
import {FilmInfo} from "../../types/film-page";

export const getFilms = (state: State): FilmInfo[] => state[NameSpace.MainScreen].films;

export const getCurrentFilms = (state: State): FilmInfo[] => state[NameSpace.MainScreen].currentFilms;

export const getPromoFilm = (state: State): FilmInfo | null => state[NameSpace.MainScreen].promoFilm;

export const getGenres = (state: State): string[] => state[NameSpace.MainScreen].genres;

export const getSelectedGenre = (state: State): string => state[NameSpace.MainScreen].currentGenre;

export const getIsLoading = (state: State): boolean => state[NameSpace.MainScreen].isFilmsLoaded;

export const getCount = (state: State): number => state[NameSpace.MainScreen].count;
