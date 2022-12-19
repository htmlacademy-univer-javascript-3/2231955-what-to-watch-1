import {FilmInfo} from "../types/film-page";
import {Genre} from "../types/genre";

export function getFavoriteFilms(films: FilmInfo[]) {
  return films.filter((x) => x.isFavorite);
}

export function filterFilmsByGenre(films: FilmInfo[], genre: string) {
  console.log(genre)
  return genre == 'All Genres' ? films : films.filter((x) => x.genre == genre)
}
