import FilmsList from "../../components/films-list/films-list";
import {Link, useParams} from "react-router-dom";
import {Tabs} from "../../components/tabs/tabs";
import {Header} from "../../components/header/header";
import {Footer} from "../../components/footer/footer";
import {useAppDispatch, useAppSelector} from "../../hooks";
import {useEffect} from "react";
import {getFilm, getReviews, getSimilarFilms} from "../../api/api-actions";
import {AuthStatus} from "../../types/auth";

export type FilmPageProps = {

}
export function Film(props: FilmPageProps): JSX.Element {
  const params = useParams();
  const id = params.id
  const {film, similarFilms, authStatus} = useAppSelector((state) => state);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getFilm(id));
    dispatch(getSimilarFilms(id));
    dispatch(getReviews(id));
  }, [dispatch, id]);


  return (
    <>
      {film &&
      <section className="film-card film-card--full">
        <div className="film-card__hero">
          <div className="film-card__bg">
            <img src={film.backgroundImage} alt="background image"/>
          </div>

          <h1 className="visually-hidden">WTW</h1>
          <Header/>
          <div className="film-card__wrap">
            <div className="film-card__desc">
              <h2 className="film-card__title">{film.name}</h2>
              <p className="film-card__meta">
                <span className="film-card__genre">{film.genre}</span>
                <span className="film-card__year">{film.released}</span>
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
                    film
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
                {authStatus == AuthStatus.Authorized && <Link to={`/films/${film.id}/review`} className="btn film-card__button">Add review</Link>}
              </div>
            </div>
          </div>
        </div>

        <div className="film-card__wrap film-card__translate-top">
          <div className="film-card__info">
            <div className="film-card__poster film-card__poster--big">
              <img src={film.posterImage} alt={film.name} width="218"
                height="327"
              />
            </div>
            <Tabs film={film}/>


          </div>
        </div>
      </section>
      }

      <div className="page-content">
        <section className="catalog catalog--like-this">
          <h2 className="catalog__title">More like this</h2>

          <FilmsList films={similarFilms}/>

        </section>

        <Footer/>

      </div>

    </>
  );
}
