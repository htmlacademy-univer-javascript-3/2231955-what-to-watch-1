import {FilmInfo} from "../../types/film-page";
import {useAppDispatch, useAppSelector} from "../../hooks";
import {getReviews} from "../../store/film-data/selectors";

export function ReviewsFilm({film}: {film: FilmInfo}): JSX.Element {
  const reviews = useAppSelector(getReviews);

  return (
    <div className="film-card__reviews film-card__row">
      <div className="film-card__reviews-col">
        {reviews.map( (r) =>
          <div className="review">
            <blockquote className="review__quote">
              <p className="review__text">{r.comment}</p>
              <footer className="review__details">
                <cite className="review__author">{r.user.name}</cite>
                <time className="review__date">{r.date}</time>
              </footer>
            </blockquote>

            <div className="review__rating">{r.rating}</div>
          </div>)}
      </div>
    </div>
  )
}
