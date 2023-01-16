import {NameSpace, State} from "../../types/state";
import {FilmInfo} from "../../types/film-page";
import {Review} from "../../types/review";

export const getFilm = (state: State): FilmInfo | null => state[NameSpace.FilmScreen].film;

export const getSimilarFilms = (state: State): FilmInfo[] => state[NameSpace.FilmScreen].similarFilms;

export const getReviews = (state: State): Review[] => state[NameSpace.FilmScreen].reviews;
export const getLoadedStatus = (state: State):  boolean => state[NameSpace.FilmScreen].isLoaded;


export const getPostReviewError = (state: State): string | null => state[NameSpace.FilmScreen].postReviewError;
