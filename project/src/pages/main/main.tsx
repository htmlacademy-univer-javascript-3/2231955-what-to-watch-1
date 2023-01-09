import GenresList from '../../components/genres-list/genres-list';
import FilmsList from '../../components/films-list/films-list';

import {Link} from "react-router-dom";
import {useAppDispatch, useAppSelector} from "../../hooks";

import {MainPage} from "../../types/main";
import {Header} from "../../components/header/header";
import {useEffect} from "react";
import {resetCountFilms} from "../../store/action";
import {ShowMore} from "../../components/show-more/show-more";
import {Footer} from "../../components/footer/footer";
import {FilmPoster} from "../../components/film-card/film-poster";
import {FilmCardBg} from "../../components/film-card/film-card-bg";
import FilmCardDescription from "../../components/film-card/film-card-description";

function Main(props: MainPage): JSX.Element {

  const {genre, genres, count, currentFilms, promoFilm, authStatus} = useAppSelector((state) => state)
  const dispatch = useAppDispatch();

  useEffect(() => {dispatch(resetCountFilms())}, [])

  return(
    <>{promoFilm &&
      <section className="film-card">
        <FilmCardBg film={promoFilm}/>
        <h1 className="visually-hidden">WTW</h1>
        <Header/>
        <div className="film-card__wrap">
          <div className="film-card__info">
            <FilmPoster film={promoFilm}/>
            <FilmCardDescription film={promoFilm} authStatus={authStatus}/>
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
        <Footer/>
      </div>
    </>
  );
}

export default Main;
