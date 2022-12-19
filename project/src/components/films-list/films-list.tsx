import {FilmInfo} from "../../types/film-page";
import FilmCard from "../film-card/film-card";
import GenresList from "../genres-list/genres-list";
import {ShowMore} from "../show-more/show-more";
import {useState} from "react";
import {useAppSelector} from "../../hooks";


export type FilmsListProps = {
  films: FilmInfo[];
}

function FilmsList(props: FilmsListProps): JSX.Element {
  const {currentFilms, count} = useAppSelector((state) => state);


  const filmCards = props.films.map((film) => (
    <FilmCard key={film.id} film={film}/>))
  return (
    <>
    <div className="catalog__films-list">
      {
        count ? filmCards.slice(0, count): filmCards
      }
    </div>
    </>
  )

}

export default FilmsList;

