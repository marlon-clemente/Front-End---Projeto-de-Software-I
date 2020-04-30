import React, { useContext } from 'react';
import Styles from './styles';
import { Redirect } from 'react-router-dom'
import { AuthContext } from '../../../context/Auth';
import Button from '@material-ui/core/Button';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import Avatar from '@material-ui/core/Avatar';
import Divider from '@material-ui/core/Divider';
import Title from "../../../component/Title";
import app from "../../../firebase";

export default function Conta() {
  const classes = Styles();
  const {currentUser} = useContext(AuthContext);
  
  const handleLogOut = ()=>{
    app.auth().signOut().then(function() {
      return(
        <Redirect to="/login" />
      )
    }).catch(function(error) {
      console.log("Erro de LogOut : " + error);
    });
  }

  return (
    <div className={classes.root}><div className={classes.content}>
      <Avatar className={classes.avatar}
        src={ currentUser.photoURL }>
      </Avatar>
      <Title>{ currentUser.displayName }</Title>
      
      <Button
        variant="contained"
        color="primary"
        size="small"
        className={classes.button}
        startIcon={<ExitToAppIcon />}
        onClick={ handleLogOut }
      >
        Sair
      </Button>
      <Divider className={classes.divider} />
      
    </div></div>
  )
}
