import {FilmInfo} from '../../types/film-page';
import FilmCard from '../film-card/film-card';
import {useMemo} from 'react';


export type FilmsListProps = {
  films: FilmInfo[];
  count: number
}

function FilmsList(props: FilmsListProps): JSX.Element {

  const getFilmCards = (length: number, films: FilmInfo[]) =>{
    const filmCards = films.map((film) => (
      <FilmCard key={film.id} film={film}/>));
    return length ? filmCards.slice(0, length) : filmCards;
  };

  const filmsList = useMemo(() => getFilmCards(props.count, props.films), [props.films, props.count]);

  return (
    <div className="catalog__films-list">
      {
        filmsList
      }
    </div>
  );

}

export default FilmsList;

