import {FilmInfo} from '../../types/film-page';

export function FilmCardBg(props: { film: FilmInfo }) {
  return (
    <div className="film-card__bg">
      <img src={props.film.backgroundImage} alt="background"/>
    </div>);
}
