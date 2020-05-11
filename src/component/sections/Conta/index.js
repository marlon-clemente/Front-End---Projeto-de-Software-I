import React, { useContext } from 'react';
import Styles from './styles';
import { Redirect } from 'react-router-dom'
import Button from '@material-ui/core/Button';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import Avatar from '@material-ui/core/Avatar';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Link from '@material-ui/core/Link';
import Title from "../../../component/Title";
import app from "../../../firebase";
import LockIcon from '@material-ui/icons/Lock';
import PersonIcon from '@material-ui/icons/Person';

import { AuthContext } from '../../../context/Auth';
import { useSections } from '../../../context/Sections';

export default function Conta() {
  const classes = Styles();
  const {currentUser} = useContext(AuthContext);
  const { setCurrentSections} = useSections();

  const handleLogOut = ()=>{
    app.auth().signOut().then(function() {
      return(
        <Redirect to="/login" />
      )
    });
  }

  const handleEditProfile = ()=>{
    setCurrentSections("editprofile");
  }
  const handleSecurity = () =>{
    setCurrentSections("security");
  }
  return (
    <div>
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

      <Divider />

      <Typography><Box fontFamily="Lato" fontSize={16}
        fontWeight={600} textAlign="left"
        m={2}><Link 
        onClick={handleEditProfile} href="#">
          <PersonIcon />
          Editar perfil</Link>
          </Box>
      </Typography>
      
      <Typography><Box fontFamily="Lato" fontSize={16}
        fontWeight={600} textAlign="left"
        m={2}><Link
        onClick={handleSecurity} href="#">
          <LockIcon/>
          Segurança</Link></Box>
      </Typography>
    </div>
  )
}
