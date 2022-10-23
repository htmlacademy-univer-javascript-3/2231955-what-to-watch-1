export type GenresListProps = {
  genres: string[];
  currentActive: string;
}


function GenresList(props: GenresListProps): JSX.Element{
  return (
    <ul className="catalog__genres-list">
      {
        props.genres.map((genre) =>
          (<li className={`catalog__genres-item ${genre === props.currentActive ? 'catalog__genres-item--active' : ''}`}>
            <a href="#" className="catalog__genres-link">{genre}</a>
           </li>))
      }
    </ul>);

}

export default GenresList;
