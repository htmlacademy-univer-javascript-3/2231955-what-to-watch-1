import {FilmInfo} from "../types/film-page";

export function filterFilmsByGenre(films: FilmInfo[], genre: string) {
  console.log(genre)
  return genre == 'All Genres' ? films : films.filter((x) => x.genre == genre)
}
