import React, { useContext } from 'react';
import Styles from './styles';
import Button from '@material-ui/core/Button';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import Avatar from '@material-ui/core/Avatar';
import Divider from '@material-ui/core/Divider';

import LinkIcon from '../componentes/LinkIcon';
import Title from "../componentes/Title";
import NumCount from "../componentes/NumCount";

import DataContext from '../../../context/Data';

export default function Conta() {
  const classes = Styles();
  const { loggedUser, school, handleLogout } = useContext(DataContext);

  return (
    <div>
      <Avatar className={classes.avatar}
        src="">
      </Avatar>

      <Title title={loggedUser.username}
       city="Nome da cidade | UF"/>
      <Button
        variant="contained"
        color="primary"
        size="small"
        disableElevation
        className={classes.button}
        startIcon={<ExitToAppIcon />}
        onClick={ handleLogout }
      >
        Sair
      </Button>

      <Divider />

      <NumCount code={school.id_hash} />

      <Divider />

      <LinkIcon 
        label="Alterar perfil escolar"
        icon="SchoolIcon"
        toSection="editprofile"
      />
      <LinkIcon 
        label="Segurança" 
        icon="LockIcon"
        toSection="security"
      />
    </div>
  )
}
