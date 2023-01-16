import FilmsList from "../../components/films-list/films-list";
import {FilmInfo} from "../../types/film-page";
import {useAppSelector} from "../../hooks";
import {Header} from "../../components/header/header";
import {Footer} from "../../components/footer/footer";
import {getCount, getFilms} from "../../store/main-data/selectors";
export type FavoriteFilmsListProps = {
}
export function FavoriteFilmsList(props: FavoriteFilmsListProps): JSX.Element {
  const films = useAppSelector(getFilms);
  const count = useAppSelector(getCount);

  return (
    <div className="user-page">
      <Header/>
      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>

        <div className="catalog__films-list">
          {
            <FilmsList films={films} count={count}/>
          }
        </div>
      </section>

      <Footer/>
    </div>
  );
}
