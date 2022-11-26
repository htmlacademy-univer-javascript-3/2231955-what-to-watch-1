import Main from '../../pages/main/main';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import {SignIn} from '../../pages/sign-in/sign-in';
import {FavoriteFilmsList} from '../../pages/favorite-list/favorite-films-list';
import {Film} from '../../pages/film/film';
import {AddReview} from '../../pages/add-review/add-review';
import {MediaPlayer} from '../../pages/player/media-player';
import Page404 from '../../pages/404/404';
import PrivateRoute from '../private-routes/private-routes';
import {Urls} from '../../store/urls';
import {MainPage} from '../../types/main';
import {MediaFileStates} from '../../types/media-player-state';

function App(props: MainPage): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='' element=
          {
            <Main promoFilm={props.promoFilm}
                  films={props.films}
            />
          }
        />
        <Route path={Urls.Login} element={<SignIn/>}/>
        <Route path={Urls.MyList} element=
          {
            <PrivateRoute isAuthorised={false}>
              <FavoriteFilmsList films={props.films}/>
            </PrivateRoute>
          }
        />
        <Route path={Urls.Film} element=
          {
            <Film id={props.promoFilm.id}
                  description={props.promoFilm.description}
                  rating={props.promoFilm.rating}
                  video={props.promoFilm.video}
                  director={props.promoFilm.director}
                  starring={props.promoFilm.starring}
                  background={props.promoFilm.background}
                  name={props.promoFilm.name}
                  genre={props.promoFilm.genre}
                  poster={props.promoFilm.poster}
                  year={props.promoFilm.year}
                  isInList={false}
            />
          }
        />
        <Route path={Urls.AddReview} element={<AddReview films={props.films}/>}/>
        <Route path={Urls.MediaPlayer} element={<MediaPlayer time={'0.00.00'} state={MediaFileStates.Paused} films={props.films}/>}/>
        <Route path={Urls.NotFound} element={<Page404/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
