import {AddReviewForm} from '../../components/add-review-form/add-review-form';
import {useAppSelector} from '../../hooks';
import {Header} from '../../components/header/header';
import {getFilm} from '../../store/film-data/selectors';
import Page404 from '../404/404';
import {getPromoFilm} from '../../store/main-data/selectors';


export function AddReview(): JSX.Element {
  const film = useAppSelector(getFilm);
  const promo = useAppSelector(getPromoFilm);
  const filmToReview = film ? film : promo;

  return (filmToReview ?
    <section className="film-card film-card--full">
      <div className="film-card__header">
        <div className="film-card__bg">
          <img src={filmToReview.backgroundImage} alt="back"/>
        </div>

        <h1 className="visually-hidden">WTW</h1>
        <Header className=""/>
        <div className="film-card__poster film-card__poster--small">
          <img src={filmToReview.posterImage} alt="asd" width="218"
            height="327"
          />
        </div>
      </div>

      <div className="add-review">
        <AddReviewForm filmId={filmToReview.id}/>
      </div>
    </section> : <Page404/>
  ) ;
}
