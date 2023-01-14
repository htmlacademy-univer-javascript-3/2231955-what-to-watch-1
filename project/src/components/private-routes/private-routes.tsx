import {Navigate} from 'react-router-dom';
import {Urls} from '../../types/urls';
import {useAppSelector} from "../../hooks";
import {getAuthStatus} from "../../store/auth-process/selectors";

type PrivateRouteProps = {
  children: JSX.Element;
}

function PrivateRoute(props: PrivateRouteProps) {
  const authStatus = useAppSelector(getAuthStatus);

  return(
    authStatus ?
      props.children :
      <Navigate to={Urls.Login}/>
  );
}

export default PrivateRoute;
