import React, {useContext, useRef, useState} from 'react';
import Styles from './styles';
import Typography from '@material-ui/core/Typography';
import {Form} from '@unform/web';
import Button from '@material-ui/core/Button';

import TextField from '../../../component/Form/input';
import DataContext from '../../../context/Data';

export default function AlterEmail() {
  const classes = Styles();
  const { loggedUser } = useContext(DataContext);
  const formRef = useRef(null);
  
  const handleSubmitUpdateUsername = (data) =>{
    if(data.email !== data.emailConfirm){
      formRef.current.setFieldError('emailConfirm', 'Os E-mails não correspondem! Digite-os novamente')
    } else if
    (data.email === "" && data.emailConfirm ==="" ){
      formRef.current.setErrors({
        email: '',
        emailConfirm: ''
      })
    }
    console.log(data)
  }
  
  return (<div>
    <Form ref={formRef} onSubmit={handleSubmitUpdateUsername} autoComplete="off">
      <Typography variant="h5">Alterar e-mail de acesso</Typography>
        <TextField className={classes.imput} name="email" label="Novo e-mail" type="email" />
        <TextField className={classes.imput} name="emailConfirm" label="Digite o novo e-mail novamente" />
      <Button variant="contained" color="primary" className={classes.button} type="submit">Alterar</Button>
    </Form>
  </div>)
}