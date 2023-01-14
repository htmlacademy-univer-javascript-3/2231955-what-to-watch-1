import {FilmInfo} from '../types/film-page';

export function filterFilmsByGenre(films: FilmInfo[], genre: string) {
  return genre === 'All Genres' ? films : films.filter((x) => x.genre === genre);
}
