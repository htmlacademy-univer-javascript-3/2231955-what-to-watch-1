import {FilmInfo} from "../types/film-page";
import {Genre} from "../types/genre";

export function getFavoriteFilms(films: FilmInfo[]) {
  return films.filter((x) => x.isInList);
}

export function filterFilmsByGenre(films: FilmInfo[], genre: Genre) {
  return genre == Genre.All ? films : films.filter((x) => x.genre == genre)
}
