import {FilmInfo} from "../../types/film-page";
import FilmCard from "../film-card/film-card";
import GenresList from "../genres-list/genres-list";


export type FilmsListProps = {
  films: FilmInfo[];
  count?: number
}

function FilmsList(props: FilmsListProps): JSX.Element {
  const filmCards = props.films.map((film) => (
    <FilmCard key={film.id} film={film}/>))
  return (
    <div className="catalog__films-list">
      {
        props.count ? filmCards.slice(0, props.count): filmCards
      }
    </div>)

}

export default FilmsList;

