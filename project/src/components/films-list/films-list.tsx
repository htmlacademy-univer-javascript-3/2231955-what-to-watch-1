import {FilmInfo} from "../../types/film-page";
import FilmCard from "../film-card/film-card";
import {useMemo} from "react";
import {useAppSelector} from "../../hooks";


export type FilmsListProps = {
  films: FilmInfo[];
}

function FilmsList(props: FilmsListProps): JSX.Element {
  const {count} = useAppSelector((state) => state);

  const getFilmCards = (count: number, films: FilmInfo[]) =>{
    const filmCards = films.map((film) => (
      <FilmCard key={film.id} film={film}/>))
    return count ? filmCards.slice(0, count): filmCards
  }

  const filmsList = useMemo(() => getFilmCards(count, props.films), [props.films, count]);

  return (
    <>
    <div className="catalog__films-list">
      {
        filmsList
      }
    </div>
    </>
  )

}

export default FilmsList;

