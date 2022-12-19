import GenresList from '../../components/genres-list/genres-list';
import FilmsList from '../../components/films-list/films-list';

import {Link} from "react-router-dom";
import {useAppDispatch, useAppSelector} from "../../hooks";

import {MainPage} from "../../types/main";
import {Header} from "../../components/header/header";
import {useEffect} from "react";
import {resetCountFilms} from "../../store/action";
import {ShowMore} from "../../components/show-more/show-more";

function Main(props: MainPage): JSX.Element {

  const {genre, genres, count, currentFilms, promoFilm} = useAppSelector((state) => state)
  const dispatch = useAppDispatch();

  useEffect(() => {dispatch(resetCountFilms())}, [])

  return(
    <>{promoFilm &&
      <section className="film-card">
        <div className="film-card__bg">
          <img src={promoFilm.backgroundImage} alt="The Grand Budapest Hotel"/>
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <Header/>

        <div className="film-card__wrap">
          <div className="film-card__info">
            <div className="film-card__poster">
              <img src={promoFilm.posterImage} alt="The Grand Budapest Hotel poster" width="218"
                   height="327"
              />
            </div>

            <div className="film-card__desc">
              <h2 className="film-card__title">{promoFilm.name}</h2>
              <p className="film-card__meta">
                <span className="film-card__genre">{promoFilm.genre}</span>
                <span className="film-card__year">{promoFilm.released}</span>
              </p>

              <div className="film-card__buttons">
                <Link to={`/player/${promoFilm.id}`} className="btn btn--play film-card__button">
                  <svg viewBox="0 0 19 19" width="19" height="19">
                    <use xlinkHref="#play-s"></use>
                  </svg>
                  <span>Play</span>
                </Link>
                <button className="btn btn--list film-card__button" type="button">
                  <svg viewBox="0 0 19 20" width="19" height="20">
                    <use xlinkHref="#add"></use>
                  </svg>
                  <span>My list</span>
                  <span className="film-card__count">9</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    }

      <div className="page-content">
        <section className="catalog">
          <h2 className="catalog__title visually-hidden">Catalog</h2>

          {<GenresList currentActive={genre} genres={genres}/>}
          {<FilmsList films={currentFilms}/>}
          {<ShowMore isAllLoaded={count !== currentFilms.length } />}


        </section>

        <footer className="page-footer">
          <div className="logo">
            <a className="logo__link logo__link--light">
              <span className="logo__letter logo__letter--1">W</span>
              <span className="logo__letter logo__letter--2">T</span>
              <span className="logo__letter logo__letter--3">W</span>
            </a>
          </div>

          <div className="copyright">
            <p>© 2019 What to watch Ltd.</p>
          </div>
        </footer>
      </div>
    </>
  );
}

export default Main;
