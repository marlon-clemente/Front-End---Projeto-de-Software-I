import React, { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { AuthContext } from '../context/Auth';

const PrivateRouteDir = ({component: RouteComponent, ...rest}) => {
  const {currentUser} = useContext(AuthContext);
  var provider = '';
  if (currentUser != null){
    const getProviderUser = currentUser.providerData;
    provider = getProviderUser[0].providerId;
  }

  return(
      <Route
        {...rest}
        render={routeProps =>
          !!currentUser && provider === 'password' ? (
              <RouteComponent {...routeProps } />
          ) : (
              <Redirect to={"/login"} />
          )
        }
      />
  );
};

export default PrivateRouteDir;