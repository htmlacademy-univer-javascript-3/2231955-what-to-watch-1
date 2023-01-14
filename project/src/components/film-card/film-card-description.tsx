import {FilmInfo} from '../../types/film-page';
import {AuthStatus} from '../../types/auth';
import {useNavigate} from 'react-router-dom';
import React, {useEffect, useState} from 'react';
import {Urls} from '../../types/urls';
import {getFavoriteFilm, getFavoriteListCount} from '../../store/favorite-data/selectors';
import {useAppDispatch, useAppSelector} from '../../hooks';
import {getAuthStatus} from '../../store/auth-process/selectors';
import {changeFilmStatus, fetchFavouriteFilms} from '../../api/api-actions';
import {redirect} from '../../store/action';

function FilmCardDescription(props: { film: FilmInfo, authStatus: AuthStatus }) {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const favoriteFilmCount = useAppSelector(getFavoriteListCount);
  const newFavoriteFilm = useAppSelector(getFavoriteFilm);
  const authStatus = useAppSelector(getAuthStatus);
  const [isFavorite, setIsFavorite] = useState(props.film.isFavorite);

  useEffect(() => {
    if (newFavoriteFilm && newFavoriteFilm.id === props.film.id){
      dispatch(fetchFavouriteFilms());
      setIsFavorite(newFavoriteFilm.status);
    } else if (!newFavoriteFilm) {
      setIsFavorite(false);
    }
  }, [newFavoriteFilm, dispatch, props.film.id]);


  const changeStatus = () => {
    if (authStatus === AuthStatus.Unauthorized) {
      dispatch(redirect(Urls.Login));
    } else {
      dispatch(changeFilmStatus({filmId: props.film.id, status: +(!isFavorite)}));
    }
  };


  return (
    <div className="film-card__desc">
      <h2 className="film-card__title">{props.film.name}</h2>
      <p className="film-card__meta">
        <span className="film-card__genre">{props.film.genre}</span>
        <span className="film-card__year">{props.film.released}</span>
      </p>

      <div className="film-card__buttons">
        <button className="btn btn--play film-card__button"
          type="button"
          onClick={ () => {
            navigate(`/player/${props.film.id}`);
          }}
        >
          <svg viewBox="0 0 19 19" width="19" height="19">
            <use xlinkHref="#play-s"></use>
          </svg>
          <span>Play</span>
        </button>
        <button className="btn btn--list film-card__button" type="button" onClick={changeStatus}>
          {
            !isFavorite ?
              <svg viewBox="0 0 19 20" width="19" height="20">
                <use xlinkHref="#add"></use>
              </svg> :
              <svg viewBox="0 0 18 14" width="18" height="14">
                <use xlinkHref="#in-list"></use>
              </svg>
          }
          <span>My list</span>
          <span className="film-card__count">{favoriteFilmCount}</span>
        </button>
        {props.authStatus === AuthStatus.Authorized &&
        <button type="button" className="btn film-card__button" onClick={ () => {
          navigate(`/films/${props.film.id}/review`);
        }}
        >Add review
        </button>}
      </div>
    </div>);
}

export default React.memo(FilmCardDescription);
