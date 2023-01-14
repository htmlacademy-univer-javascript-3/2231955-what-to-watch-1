import {FilmInfo} from '../../types/film-page';
import FilmCard from '../film-card/film-card';
import {useMemo} from 'react';
import {useAppSelector} from '../../hooks';
import {getCount} from '../../store/main-data/selectors';


export type FilmsListProps = {
  films: FilmInfo[];
}

function FilmsList(props: FilmsListProps): JSX.Element {
  const count = useAppSelector(getCount);

  const getFilmCards = (length: number, films: FilmInfo[]) =>{
    const filmCards = films.map((film) => (
      <FilmCard key={film.id} film={film}/>));
    return length ? filmCards.slice(0, length) : filmCards;
  };

  const filmsList = useMemo(() => getFilmCards(count, props.films), [props.films, count]);

  return (
    <div className="catalog__films-list">
      {
        filmsList
      }
    </div>
  );

}

export default FilmsList;

