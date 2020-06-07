import React, { useContext } from 'react';
import { Redirect } from 'react-router-dom';
import DataContext from '../context/Data';

const SwitchRoute = () => {
  const { loggedUser } = useContext(DataContext);
  let red  = "/login";
  
  if (Object.keys(loggedUser).length) {
    if(loggedUser.password)
      red = '/dashboard';
    else
      red = '/home'
  }

  return(
      <>
        <Redirect to={red}/>
      </>
  );
};

export default SwitchRoute;