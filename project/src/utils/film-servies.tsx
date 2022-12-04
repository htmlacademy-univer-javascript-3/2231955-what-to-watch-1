import FilmCard from '../components/film-card/film-card';
import {FilmInfo} from "../types/film-page";
import {Genre} from "../types/genre";

export function getFavoriteFilms(films: FilmInfo[]) {
  return films.filter((x) => x.isInList);
}

export function filterFilmsByGenre(films: FilmInfo[], genre: Genre) {
  let res = null
  console.log(genre)
  console.log(Genre.All)

  if (genre == Genre.All){
    console.log("1")
    res = films
  }
  else {
    console.log("2")

    res = films.filter((x)=> x.genre == genre);
  }
  console.log(res)

  return res
}
