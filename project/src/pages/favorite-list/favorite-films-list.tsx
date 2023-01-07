import FilmsList from "../../components/films-list/films-list";
import {FilmInfo} from "../../types/film-page";
import {useAppSelector} from "../../hooks";
import {Header} from "../../components/header/header";
export type FavoriteFilmsListProps = {
}
export function FavoriteFilmsList(props: FavoriteFilmsListProps): JSX.Element {
  const {films} = useAppSelector((state) => state);

  return (
    <div className="user-page">
      <Header/>
      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>

        <div className="catalog__films-list">
          {
            <FilmsList films={films}/>
          }
        </div>
      </section>

      <footer className="page-footer">
        <div className="logo">
          <a href="/markup/main.html" className="logo__link logo__link--light">
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
  );
}
