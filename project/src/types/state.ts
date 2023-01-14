import {store} from '../store';
import {AuthStatus, UserInfo} from "./auth";
import {FilmInfo} from "./film-page";
import {Review} from "./review";

export type AuthProcess = {
  authStatus: AuthStatus
  user: UserInfo | null,
}

export type MainData = {
  currentGenre: string,
  genres:string[];
  promoFilm: FilmInfo | null;
  films: FilmInfo[],
  currentFilms: FilmInfo[]
  count: number,
  isFilmsLoaded: boolean,
}

export type FilmData = {
  film: FilmInfo | null;
  similarFilms: FilmInfo[];
  reviews: Review[];
  postReviewError: string | null;

}

export enum NameSpace {
  Auth = 'USER',
  MainScreen = 'MAIN',
  FilmScreen = 'FILM',
  App ='APP'
}
export type State = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
