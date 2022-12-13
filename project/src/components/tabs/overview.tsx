import {FilmInfo} from "../../types/film-page";

export function OverviewFilm({film}: {film: FilmInfo}): JSX.Element {
  return (
    <>
      <div className="film-rating">
        <div className="film-rating__score">{film.rating.rate}</div>
        <p className="film-rating__meta">
          <span className="film-rating__level">Very good</span>
          <span className="film-rating__count">{film.rating.count} ratings</span>
        </p>
      </div>

      <div className="film-card__text">
        <p>{film.description}</p>

        <p className="film-card__director"><strong>Director:<span>{film.director}</span></strong></p>

        <p className="film-card__starring"><strong>Starring:<span>{film.starring}</span></strong>
        </p>
      </div>
    </>
  )
}
