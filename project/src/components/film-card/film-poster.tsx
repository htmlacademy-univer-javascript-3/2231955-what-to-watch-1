import {FilmInfo} from "../../types/film-page";
import {Tabs} from "../tabs/tabs";

export function FilmPoster(props: { film: FilmInfo }) {
  return (
    <div className="film-card__poster film-card__poster--big">
      <img src={props.film.posterImage} alt={props.film.name} width="218"
           height="327"
      />
    </div>);
}
