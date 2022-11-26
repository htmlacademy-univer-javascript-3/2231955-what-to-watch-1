import {FilmInfo} from "../../types/film-page";
import {Link} from "react-router-dom";
export type SmallFilmCardProps = {
  film: FilmInfo;
}
function FilmCard(props: SmallFilmCardProps):JSX.Element {
  return (
    <article className="small-film-card catalog__films-card">
      <div className="small-film-card__image">
        <img src={props.film.poster.imageSrc} alt={props.film.name} width="280" height="175"/>
      </div>
      <h3 className="small-film-card__title">
        <Link className="small-film-card__link" to={`/films/${props.film.id}`}>{props.film.name}</Link>
      </h3>
    </article>
  );
}

export default FilmCard;
