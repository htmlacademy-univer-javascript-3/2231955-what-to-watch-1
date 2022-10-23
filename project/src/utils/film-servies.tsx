import FilmCard from '../components/film-card/film-card';
import {FilmCardInfo} from '../types/film-card-info';

export function getFilmsCards(films: FilmCardInfo[]){
  return films.map((filmCardProps) =>
    (<FilmCard
      poster={filmCardProps.poster}
      name={filmCardProps.name}
      isFavorite={filmCardProps.isFavorite}
    />));
}
export function getFavoriteFilms(films: FilmCardInfo[]) {
  return films.filter((x) => x.isFavorite);
}

export function getFilmsByGenre(films: FilmCardInfo[], genre: string) {
  // stub
  return films.slice(0, 4);
}
