import Main from '../../pages/main/main';
import {Route, Routes} from 'react-router-dom';
import {SignIn} from '../../pages/sign-in/sign-in';
import {FavoriteFilmsList} from '../../pages/favorite-list/favorite-films-list';
import {Film} from '../../pages/film/film';
import {AddReview} from '../../pages/add-review/add-review';
import Page404 from '../../pages/404/404';
import PrivateRoute from '../private-routes/private-routes';
import {Urls} from '../../types/urls';
import {useAppSelector} from '../../hooks';
import {Spinner} from '../spinner/spinner';
import React from 'react';
import HistoryRouter from '../history-route/history-route';
import browserHistory from '../../browser-history';
import {getIsLoading} from '../../store/main-data/selectors';
import {MediaPlayer} from '../../pages/player/media-player';

function App(): JSX.Element {
  const isFilmsLoaded = useAppSelector(getIsLoading);

  return isFilmsLoaded ? (
    <HistoryRouter history={browserHistory}>
      <Routes>
        <Route path={Urls.Home} element=
          {
            <Main/>
          }
        />
        <Route path={Urls.Login} element={<SignIn/>}/>
        <Route path={Urls.MyList} element=
          {
            <PrivateRoute>
              <FavoriteFilmsList/>
            </PrivateRoute>
          }
        />
        <Route path={Urls.Film} element={<Film/>}/>
        <Route path={Urls.AddReview} element={<AddReview />}/>
        <Route path={Urls.MediaPlayer} element={<MediaPlayer/>}/>
        <Route path={Urls.NotFound} element={<Page404/>}/>
      </Routes>
    </HistoryRouter>
  ) : <Spinner/>;
}

export default App;
