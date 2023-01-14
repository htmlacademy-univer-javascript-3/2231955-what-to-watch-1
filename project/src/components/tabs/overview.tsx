import {FilmInfo} from '../../types/film-page';
import React, {useMemo} from 'react';

function OverviewFilm({film}: {film: FilmInfo}): JSX.Element {
  const getRatingLevel = (rating: number) => {
    if (0 <= rating && rating < 3){
      return 'Bad';
    } else if (3 <= rating && rating < 5){
      return 'Normal';
    } else if (5 <= rating && rating < 8){
      return 'Good';
    } else if (8 <= rating && rating < 10){
      return 'Very good';
    } else {
      return 'Awecome';
    }
  };

  const ratingLevel = useMemo(() => getRatingLevel(film.rating), [film.rating]);
  return (
    <>
      <div className="film-rating">
        <div className="film-rating__score">{film.rating}</div>
        <p className="film-rating__meta">
          <span className="film-rating__level">{ratingLevel}</span>
          <span className="film-rating__count">{film.scoresCount} ratings</span>
        </p>
      </div>

      <div className="film-card__text">
        <p>{film.description}</p>

        <p className="film-card__director"><strong>Director:<span>{film.director}</span></strong></p>

        <p className="film-card__starring"><strong>Starring:<span>{film.starring}</span></strong>
        </p>
      </div>
    </>
  );
}
export default React.memo(OverviewFilm);
