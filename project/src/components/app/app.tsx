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
            <Main promoFilmInfo={props.promoFilmInfo}
            />
          }
        />
        <Route path={Urls.Login} element={<SignIn/>}/>
        <Route path={Urls.MyList} element=
          {
            <PrivateRoute isAuthorised={false}>
              <FavoriteFilmsList/>
            </PrivateRoute>
          }
        />
        <Route path={Urls.Film} element=
          {
            <Film background={props.promoFilmInfo.background}
              name={props.promoFilmInfo.name}
              genre={props.promoFilmInfo.genre}
              poster={props.promoFilmInfo.poster}
              year={props.promoFilmInfo.year}
              isInList={false}
            />
          }
        />
        <Route path={Urls.AddReview} element={<AddReview/>}/>
        <Route path={Urls.MediaPlayer} element={<MediaPlayer time={'0.00.00'} state={MediaFileStates.Paused}/>}/>
        <Route path={Urls.NotFound} element={<Page404/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
