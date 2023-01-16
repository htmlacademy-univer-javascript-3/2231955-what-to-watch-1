import FilmsList from '../../components/films-list/films-list';
import {useAppDispatch, useAppSelector} from '../../hooks';
import {Header} from '../../components/header/header';
import {Footer} from '../../components/footer/footer';
import {getFavoriteList, getFavoriteListCount} from '../../store/favorite-data/selectors';
import {useEffect} from 'react';
import {fetchFavouriteFilms} from '../../api/api-actions';

export function FavoriteList(): JSX.Element {
  const favoriteList = useAppSelector(getFavoriteList);
  const favoriteLisCount = useAppSelector(getFavoriteListCount);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchFavouriteFilms());
  });

  return (
    <div className="user-page">
      <Header className="user-page__head">
        <h1 className="page-title user-page__title">My list <span className="user-page__film-count">{favoriteLisCount}</span></h1>
      </Header>
      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>
        <FilmsList films={favoriteList} count={favoriteLisCount}/>
      </section>

      <Footer/>
    </div>
  );
}
