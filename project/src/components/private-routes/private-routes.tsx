import {Navigate} from 'react-router-dom';
import {Urls} from '../../types/urls';
import {useAppSelector} from "../../hooks";

type PrivateRouteProps = {
  children: JSX.Element;
}

function PrivateRoute(props: PrivateRouteProps) {
  const {authStatus} = useAppSelector((state) => state);

  return(
    authStatus ?
      props.children :
      <Navigate to={Urls.Login}/>
  );
}

export default PrivateRoute;
