import {Link} from 'react-router-dom';
import {useAppDispatch, useAppSelector} from '../../hooks';
import {Urls} from '../../types/urls';
import {AuthStatus} from '../../types/auth';
import {logout} from '../../api/api-actions';
import {getAuthStatus, getUser} from '../../store/auth-process/selectors';
import {redirect} from '../../store/action';
import {PropsWithChildren} from 'react';
type HeaderProps = PropsWithChildren<{
  className: string;
}>
export function Header(props: HeaderProps): JSX.Element {
  const authStatus = useAppSelector(getAuthStatus);
  const user = useAppSelector(getUser);
  const handleAvatarClick = () =>{
    if (authStatus === AuthStatus.Authorized){
      dispatch(redirect(Urls.MyList));
    }
    else{
      dispatch(redirect(Urls.Login));
    }
  };

  const dispatch = useAppDispatch();
  return(
    <>
      <h1 className="visually-hidden">WTW</h1>
      <header className={`page-header ${props.className}`}>
        <div className="logo">
          <Link to={'/'} className="logo__link">
            <span className="logo__letter logo__letter--1">W</span>
            <span className="logo__letter logo__letter--2">T</span>
            <span className="logo__letter logo__letter--3">W</span>
          </Link>
        </div>
        {props.children}
        <ul className="user-block">
          {authStatus === AuthStatus.Authorized && user ?
            <>
              <li className="user-block__item">
                <div className="user-block__avatar" onClick={handleAvatarClick}>
                  <img src={user.avatarUrl} alt="User avatar" width="63" height="63"/>
                </div>
              </li>
              <li className="user-block__item">
                <button
                  className="user-block__link"
                  style={{background: 'transparent', border: 'none'}}
                  onClick={() =>
                    dispatch(logout())}
                >
                    Sign out
                </button>
              </li>
            </> : <Link to={Urls.Login} className="user-block__link">Sign In</Link>}
        </ul>


      </header>
    </>);
}
