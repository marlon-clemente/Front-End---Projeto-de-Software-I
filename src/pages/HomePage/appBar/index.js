import React from 'react';
import Styles from './styles';
import Button from '@material-ui/core/Button';
import Logo from '../../../assets/logo.svg'

export default function AppBar() {
  const classes = Styles();
  return (
    <div className={classes.root}><div className={classes.line}>
      <img src={Logo} className={classes.logo}/>
      <div className={classes.title}>SISGEPE</div>
      <Button variant="contained" href="/redirect" disableElevation color="primary" className={classes.button}>Entrar</Button>
    </div></div>
  );
}