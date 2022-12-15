import {changeGenre, getFilmsByGenre} from "../../store/action";
import {useAppDispatch} from "../../hooks";
import {Genre} from "../../types/genre";

export type GenresListProps = {
  genres: Genre[];
  currentActive: Genre;
}


function GenresList(props: GenresListProps): JSX.Element{
  const dispatch = useAppDispatch();

  return (
    <ul className="catalog__genres-list">
      {
        props.genres.map((genre) =>
          (<li className={`catalog__genres-item ${genre === props.currentActive ? 'catalog__genres-item--active' : ''}`}>
            <button onClick={() =>
            {dispatch(changeGenre(genre));
              dispatch(getFilmsByGenre());}} className="catalog__genres-link">{genre}</button>
           </li>))
      }
    </ul>);

}

export default GenresList;
