import {loginAction} from '../../api/api-actions';
import {useRef, useState} from 'react';
import {useAppDispatch, useAppSelector} from '../../hooks';
import {AuthCredentionals, AuthStatus, LogInError} from '../../types/auth';
import {Navigate} from 'react-router-dom';
import {Header} from '../../components/header/header';
import {Footer} from '../../components/footer/footer';
import {getAuthStatus} from '../../store/auth-process/selectors';

export function SignIn(): JSX.Element{

  const emailRef = useRef<HTMLInputElement | null>(null);
  const passwordRef = useRef<HTMLInputElement | null>(null);
  const authStatus = useAppSelector(getAuthStatus);

  const dispatch = useAppDispatch();
  const [loginError, setLoginError] = useState(LogInError.NoError);

  const onSubmit = (authData: AuthCredentionals) => {


    if (authData.email === '' && authData.password === '') {
      setLoginError(LogInError.NotValidEmailAndPassword);
    }

    else if (authData.password === '') {
      setLoginError(LogInError.NotValidPassword);
    }
    else if (authData.email === '') {
      setLoginError(LogInError.NotValidEmail);
    }
    else {
      dispatch(loginAction(authData));
    }
  };
  const renderErrorMessage = (logInError: LogInError) => {
    switch (logInError) {
      case LogInError.NotValidEmail:
        return (
          <div className="sign-in__message">
            <p>email should not be empty</p>
          </div>
        );
      case LogInError.NotValidPassword:
        return (
          <div className="sign-in__message">
            <p>password should not be empty</p>
          </div>
        );
      case LogInError.NotValidEmailAndPassword:
        return (
          <div className="sign-in__message">
            <p>email should not be empty</p>
            <p>password should not be empty</p>
          </div>
        );
      default:
        return null;
    }
  };


  return (
    authStatus === AuthStatus.Authorized ?
      <Navigate to={'/'}/> :
      <div className="user-page">
        <Header className="user-page__head"/>
        <div className="sign-in user-page__content">
          <form className="sign-in__form"
            onSubmit={(evt) =>
            {
              evt.preventDefault();
              if (emailRef.current && passwordRef.current) {
                onSubmit({
                  email: emailRef.current.value,
                  password: passwordRef.current.value,
                });
              }
            }}
          >
            {renderErrorMessage(loginError)}
            <div className="sign-in__fields">
              <div className="sign-in__field">
                <input className="sign-in__input" type="email" placeholder="Email address" name="user-email"
                  id="user-email" ref={ emailRef }
                />
                <label className="sign-in__label visually-hidden" htmlFor="user-email">Email address</label>
              </div>
              <div className="sign-in__field">
                <input className="sign-in__input" type="password" placeholder="Password" name="user-password"
                  id="user-password" ref={ passwordRef }
                />
                <label className="sign-in__label visually-hidden" htmlFor="user-password">Password</label>
              </div>
            </div>
            <div className="sign-in__submit">
              <button className="sign-in__btn"
                type="submit"
              >Sign in
              </button>
            </div>
          </form>
        </div>

        <Footer/>
      </div>
  );
}
