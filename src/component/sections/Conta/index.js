import React, { useContext } from 'react';
import Styles from './styles';
import { Redirect } from 'react-router-dom'
import Button from '@material-ui/core/Button';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import Avatar from '@material-ui/core/Avatar';
import Divider from '@material-ui/core/Divider';
import app from "../../../firebase";

import LinkIcon from '../componentes/LinkIcon';
import Title from "../componentes/Title";
import NumCount from "../componentes/NumCount";

import { AuthContext } from '../../../context/Auth';

export default function Conta() {
  const classes = Styles();
  const {currentUser} = useContext(AuthContext);
  const handleLogOut = ()=>{
    app.auth().signOut().then(function() {
      return(
        <Redirect to="/login" />
      )
    });
  }

  return (
    <div>
      {console.log(currentUser)}
      <Avatar className={classes.avatar}
        src="">
      </Avatar>

      <Title title={currentUser.displayName}
       city="Nome da cidade | UF"/>
      <Button
        variant="contained"
        color="primary"
        size="small"
        disableElevation
        className={classes.button}
        startIcon={<ExitToAppIcon />}
        onClick={ handleLogOut }
      >
        Sair
      </Button>

      <Divider />
      <NumCount code="123 456" />
      <Divider />

      <LinkIcon label="Alterar perfil escolar"
        icon="SchoolIcon" toSection="editprofile"/>
      <LinkIcon label="Segurança" 
        icon="LockIcon" toSection="security"/>
    </div>
  )
}
