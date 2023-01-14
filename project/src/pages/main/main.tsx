import GenresList from '../../components/genres-list/genres-list';
import FilmsList from '../../components/films-list/films-list';
import {useAppDispatch, useAppSelector} from '../../hooks';
import {Header} from '../../components/header/header';
import {useEffect} from 'react';
import {ShowMore} from '../../components/show-more/show-more';
import {Footer} from '../../components/footer/footer';
import {FilmPoster} from '../../components/film-card/film-poster';
import {FilmCardBg} from '../../components/film-card/film-card-bg';
import FilmCardDescription from '../../components/film-card/film-card-description';
import {
  getCount, getCurrentFilms,
  getGenres,
  getPromoFilm,
  getSelectedGenre
} from '../../store/main-data/selectors';
import {getAuthStatus} from '../../store/auth-process/selectors';
import {resetCount} from '../../store/main-data/main-data';

function Main(): JSX.Element {

  const authStatus = useAppSelector(getAuthStatus);
  const count = useAppSelector(getCount);
  const currentGenre = useAppSelector(getSelectedGenre);
  const currentFilms = useAppSelector(getCurrentFilms);
  const promoFilm = useAppSelector(getPromoFilm);
  const genres = useAppSelector(getGenres); const dispatch = useAppDispatch();

  useEffect(() => {dispatch(resetCount());}, [dispatch]);

  return(
    <>{promoFilm &&
      <section className="film-card">
        <FilmCardBg film={promoFilm}/>
        <h1 className="visually-hidden">WTW</h1>
        <Header className="film-card__head"/>
        <div className="film-card__wrap">
          <div className="film-card__info">
            <FilmPoster film={promoFilm}/>
            <FilmCardDescription film={promoFilm} authStatus={authStatus}/>
          </div>
        </div>
      </section>}
    <div className="page-content">
      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>
        {<GenresList currentActive={currentGenre} genres={genres}/>}
        {<FilmsList films={currentFilms}/>}
        {<ShowMore isAllLoaded={count !== currentFilms.length } />}
      </section>
      <Footer/>
    </div>
    </>
  );
}

export default Main;
