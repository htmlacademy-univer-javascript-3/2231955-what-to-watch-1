import {Link, Navigate, useParams} from "react-router-dom";
import {Urls} from "../../types/urls";
import {AddReviewForm} from "../../components/add-review-form/add-review-form";
import {useAppSelector} from "../../hooks";
import {Header} from "../../components/header/header";
import {getFilm} from "../../store/film-data/selectors";

export type AddReviewProps = {
}
export function AddReview(props: AddReviewProps): JSX.Element {
  const film = useAppSelector(getFilm)

  return (film ?
    <section className="film-card film-card--full">
      <div className="film-card__header">
        <div className="film-card__bg">
          <img src={film.backgroundImage} alt="back"/>
        </div>

        <h1 className="visually-hidden">WTW</h1>
        <Header/>
        <div className="film-card__poster film-card__poster--small">
          <img src={film.posterImage} alt="asd" width="218"
            height="327"
          />
        </div>
      </div>

      <div className="add-review">
        <AddReviewForm filmId={film.id}/>
      </div>
    </section> : <Navigate to={Urls.NotFound}/>
  ) ;
}
