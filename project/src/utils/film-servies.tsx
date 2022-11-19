import FilmCard from '../components/film-card/film-card';
import {FilmInfo} from "../types/film-page";

export function getFavoriteFilms(films: FilmInfo[]) {
  return films.filter((x) => x.isInList);
}

export function getFilmsByGenre(films: FilmInfo[], genre: string) {
  return films.filter((x)=> x.genre === genre);
}
