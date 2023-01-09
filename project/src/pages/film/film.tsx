import FilmsList from "../../components/films-list/films-list";
import {useParams} from "react-router-dom";
import {Header} from "../../components/header/header";
import {Footer} from "../../components/footer/footer";
import {useAppDispatch, useAppSelector} from "../../hooks";
import React, {useEffect} from "react";
import {getFilm, getReviews, getSimilarFilms} from "../../api/api-actions";
import {FilmPoster} from "../../components/film-card/film-poster";
import {Tabs} from "../../components/tabs/tabs";
import {FilmCardBg} from "../../components/film-card/film-card-bg";
import FilmCardDescription from "../../components/film-card/film-card-description";

export function Film(): JSX.Element {
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
          <FilmCardBg film={film}/>

          <h1 className="visually-hidden">WTW</h1>
          <Header/>
          <div className="film-card__wrap">
            <FilmCardDescription film={film} authStatus={authStatus}/>
          </div>
        </div>

        <div className="film-card__wrap film-card__translate-top">
          <div className="film-card__info">
            <FilmPoster film={film}/>
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
