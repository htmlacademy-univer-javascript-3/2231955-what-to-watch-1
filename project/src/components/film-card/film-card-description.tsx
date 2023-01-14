import {FilmInfo} from "../../types/film-page";
import {AuthStatus} from "../../types/auth";
import {Link} from "react-router-dom";
import React from "react";

function FilmCardDescription(props: { film: FilmInfo, authStatus: AuthStatus }) {
  return <div className="film-card__desc">
    <h2 className="film-card__title">{props.film.name}</h2>
    <p className="film-card__meta">
      <span className="film-card__genre">{props.film.genre}</span>
      <span className="film-card__year">{props.film.released}</span>
    </p>

    <div className="film-card__buttons">
      <button className="btn btn--play film-card__button" type="button">
        <svg viewBox="0 0 19 19" width="19" height="19">
          <use xlinkHref="#play-s"></use>
        </svg>
        <span>Play</span>
      </button>
      <button className="btn btn--list film-card__button" type="button">
        {
          props.film
            .isFavorite ?
            <svg viewBox="0 0 19 20" width="19" height="20">
              <use xlinkHref="#add"></use>
            </svg> :
            <svg viewBox="0 0 18 14" width="18" height="14">
              <use xlinkHref="#in-list"></use>
            </svg>
        }
        <span>My list</span>
        <span className="film-card__count">9</span>
      </button>
      {props.authStatus == AuthStatus.Authorized &&
        <Link to={`/films/${props.film.id}/review`} className="btn film-card__button">Add review</Link>}
    </div>
  </div>;
}

export default React.memo(FilmCardDescription);
