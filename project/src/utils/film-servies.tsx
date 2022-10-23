import FilmCard from '../components/film-card/film-card';
import {Film} from '../types/Film';

export function getFilmsCards(films: Film[]){
  return films.map((filmCardProps) =>
    (<FilmCard
      poster={filmCardProps.poster}
      name={filmCardProps.name}
      isFavorite={filmCardProps.isFavorite}
     />));
}
export function getFavoriteFilms(films: Film[]) {
  return films.filter((x) => x.isFavorite);
}

export function getFilmsByGenre(films: Film[], genre: string) {
  // stub
  return films.slice(0, 4);
}
