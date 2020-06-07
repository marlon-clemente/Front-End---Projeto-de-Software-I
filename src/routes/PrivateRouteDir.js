import React, { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';
import DataContext from '../context/Data';

const PrivateRouteDir = ({component: RouteComponent, ...rest}) => {
  const { loggedUser } = useContext(DataContext);

  return(
      <Route
        {...rest}
        render={routeProps =>
          !!Object.keys(loggedUser).length && loggedUser.password ? (
              <RouteComponent {...routeProps } />
          ) : (
              <Redirect to={"/login"} />
          )
        }
      />
  );
};

export default PrivateRouteDir;