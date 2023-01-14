import {NameSpace, State} from '../../types/state';
import {FilmInfo} from '../../types/film-page';

export const getFavoriteList = (state: State): FilmInfo[] => state[NameSpace.Favorite].favorite;

export const getFavoriteListCount = (state: State): number => state[NameSpace.Favorite].favoriteCount;

export const getFavoriteFilm = (state: State): { id: number; status: boolean } | null => state[NameSpace.Favorite].favoriteFilm;


