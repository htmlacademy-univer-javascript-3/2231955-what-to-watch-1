import {Navigate} from 'react-router-dom';
import {Urls} from '../../utils/urls';

type PrivateRouteProps = {
  isAuthorised: boolean;
  children: JSX.Element;
}

function PrivateRoute(props: PrivateRouteProps) {
  return(
    props.isAuthorised ?
      props.children :
      <Navigate to={Urls.Login}/>
  );
}

export default PrivateRoute;
