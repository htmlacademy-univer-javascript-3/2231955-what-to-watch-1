import {Link} from "react-router-dom";
import {useAppDispatch, useAppSelector} from "../../hooks";
import {Urls} from "../../types/urls";
import {AuthStatus} from "../../types/auth";
import {logout} from "../../api/api-actions";
import {getAuthStatus, getUser} from "../../store/auth-process/selectors";

export function Header(): JSX.Element {
  const authStatus = useAppSelector(getAuthStatus);
  const user = useAppSelector(getUser);

  const dispatch = useAppDispatch();
  return(
  <header className="page-header film-card__head">
    <div className="logo">
      <Link to={`/`} className="logo__link">
        <span className="logo__letter logo__letter--1">W</span>
        <span className="logo__letter logo__letter--2">T</span>
        <span className="logo__letter logo__letter--3">W</span>
      </Link>
    </div>

    <ul className="user-block">
      <li className="user-block__item">
        <div className="user-block__avatar">
          {authStatus == AuthStatus.Authorized && user?
            <img src={user.avatarUrl} alt="User avatar" width="63" height="63"/> :
            <></>
          }

        </div>
      </li>
      <li className="user-block__item">
        {authStatus == AuthStatus.Unauthorized ?
          <Link to={Urls.Login} className="user-block__link">Sign in</Link> :
          <button
            className="user-block__link"
            style={{background: 'transparent', border: 'none'}}
            onClick={() =>
            dispatch(logout())}>
            Sign out
          </button>
        }
      </li>
    </ul>
  </header>)
}
