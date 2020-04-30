import React, { useContext } from 'react';
import { Redirect } from 'react-router-dom';
import { AuthContext } from '../context/Auth';

const SwitchRoute = () => {
  const {currentUser} = useContext(AuthContext);
  var provider = '';
  var red  = "/login";
  if (currentUser != null){
    const getProviderUser = currentUser.providerData;
    provider = getProviderUser[0].providerId;

    if(provider === 'google.com' ||
      provider === 'facebook.com') red = '/home';

    if(provider === 'password') red = 'dashboard';

  }

  return(
      <>
        <Redirect to={red}/>
      </>
  );
};

export default SwitchRoute;