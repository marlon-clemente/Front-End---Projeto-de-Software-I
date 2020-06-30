import React, { useContext } from 'react';
import Styles from './styles';
import Button from '@material-ui/core/Button';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import Avatar from '@material-ui/core/Avatar';
import Divider from '@material-ui/core/Divider';
import SchoolIcon from '@material-ui/icons/School';
import LinkIcon from '../componentes/LinkIcon';
import Title from "../componentes/Title";
import NumCount from "../componentes/NumCount";

import DataContext from '../../../context/Data';

export default function Conta() {
  const classes = Styles();
  const { loggedUser, school, handleLogout } = useContext(DataContext);

  return (
    <div>
      
      <div className={classes.avatar}><SchoolIcon style={{ fontSize: 40 }}/></div>
      
      <Title title={loggedUser.username}
       city="Nome da cidade | UF"/>
       
      <Button
        variant="contained"
        color="primary"
        size="small"
        disableElevation
        className={classes.button}
        startIcon={<ExitToAppIcon />}
        onClick={handleLogout}
      >
        Sair
      </Button>

      <Divider />

      <NumCount code={school.id_hash} />

      <Divider />

      <LinkIcon 
        label="Alterar perfil escolar"
        icon="SchoolIcon"
        link="/change_school"
      />
      <LinkIcon
        label="Configuração de usuário e segurança" 
        icon="LockIcon"
        link="/change_user"
      />
    </div>
  )
}
