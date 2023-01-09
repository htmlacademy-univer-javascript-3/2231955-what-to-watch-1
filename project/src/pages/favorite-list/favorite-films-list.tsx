import FilmsList from "../../components/films-list/films-list";
import {FilmInfo} from "../../types/film-page";
import {useAppSelector} from "../../hooks";
import {Header} from "../../components/header/header";
import {Footer} from "../../components/footer/footer";
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

      <Footer/>
    </div>
  );
}
