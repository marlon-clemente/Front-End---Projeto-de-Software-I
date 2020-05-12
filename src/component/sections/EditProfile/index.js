import React, { useState } from 'react'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import Header from '../componentes/header';
import Alert from '@material-ui/lab/Alert';

import Styles from './styles';
import loginApp from '../../../firebase';

export default function EditProfile() {
  const classes = Styles();
  const userApp = loginApp.auth().currentUser;
  const [userName, setUserName] = useState(userApp.displayName);
  const [alert, setAlert] = useState((<></>));
  
  const handleUpdateUser = (event) =>{
    userApp
    .updateProfile({
      displayName: userName
    })
    .then(()=>{
      setAlert(
        <Alert 
          severity="success">
          Seu perfil de usuário foi alterado com sucesso!
        </Alert>
      )
    })
    .catch((error) => {
      setAlert(
        <Alert 
          severity="error">
          {error}
        </Alert>
      )
    })
  }

  return (
    <div>
      <Header title="Alterar perfil" returnTo="conta" />
      <Divider/>
      <TextField 
        className={classes.textFiel}
        id="standard-basic"
        name="formName"
        label="Nome da escola"
        onChange={(e)=> setUserName(e.target.value)}
        value={userName}
        />
        <Button 
          variant="contained"
          color="primary"
          fullWidth
          onClick={handleUpdateUser}
          className={classes.submit}
          type="submit">
          Confirmar
        </Button>
      { alert }
      <Divider />
    </div>
  )
}
