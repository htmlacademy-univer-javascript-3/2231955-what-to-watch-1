import {FilmInfo} from "../../types/film-page";
import FilmCard from "../film-card/film-card";
import GenresList from "../genres-list/genres-list";


export type FilmsListProps = {
  films: FilmInfo[];
}

function FilmsList(props: FilmsListProps): JSX.Element {
  return (
    <div className="catalog__films-list">
    {
      props.films.map((film) => (
        <FilmCard key={film.id} film={film}/>))
    }
  </div>)

}

export default FilmsList;

