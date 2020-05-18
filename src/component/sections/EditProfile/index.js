import React, {useState} from 'react';
import {Form} from '@unform/web';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import Header from '../componentes/header';
import Alert from '@material-ui/lab/Alert';

import Styles from './styles';
import Input from '../../../component/Form/input';
import loginApp from '../../../firebase';

export default function EditProfile() {
  const classes = Styles();
  const userApp = loginApp.auth().currentUser;
  const [alert, setAlert] = useState((<></>));
  
  function handleUpdateUser(data){
    console.log(data)
    // userApp
    // .updateProfile({
    //   displayName: data.name
    // })
    // .then(()=>{
    //   setAlert(
    //     <Alert 
    //       severity="success">
    //       Seu perfil de usuário foi alterado com sucesso!
    //     </Alert>
    //   )
    // })
    // .catch((error) => {
    //   setAlert(
    //     <Alert 
    //       severity="error">
    //       {error}
    //     </Alert>
    //   )
    // })
  }

  return (
    <div>
      <Header title="Alterar perfil escolar" returnTo="conta" />
      <Divider/>
      <Form onSubmit={handleUpdateUser}>
        <Input name="name" label="Nome da escola"/>
        <Input name="social" label="Razão Social"/>
        <Input name="city" label="Cidade"/>
        <Button
          variant="contained"
          color="primary"
          className={classes.button}
          >Cancelar</Button>
        <Button
          variant="contained"
          type="submit"
          color="primary"
          className={classes.button}
          >Salvar alterações</Button>
      </Form>
      { alert }
      <Divider />
    </div>
  )
}
