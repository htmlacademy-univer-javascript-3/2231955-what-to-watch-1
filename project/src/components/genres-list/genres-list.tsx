import {changeGenre, getFilmsByGenre, resetCountFilms} from "../../store/action";
import {useAppDispatch} from "../../hooks";
import {Dispatch, SetStateAction, useState} from "react";

export type GenresListProps = {
  genres: string[];
  currentActive: string;
}


function GenresList(props: GenresListProps): JSX.Element{
  const dispatch = useAppDispatch();


  return (
    <ul className="catalog__genres-list">
      {
        props.genres.map((genre) =>
          (<li key={genre}
               className={`catalog__genres-item ${genre === props.currentActive ? 'catalog__genres-item--active' : ''}`}>
            <button onClick={() => dispatch(changeGenre(genre))}
                    style={{background:'transparent', border:'none'}}
                    className="catalog__genres-link">{genre}</button>
           </li>))
      }
    </ul>);

}

export default GenresList;
