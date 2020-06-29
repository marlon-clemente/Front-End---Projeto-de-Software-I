import React, {useContext, useRef, useState} from 'react';
import Styles from './styles';
import Typography from '@material-ui/core/Typography';
import {Form} from '@unform/web';
import Button from '@material-ui/core/Button';

import TextField from '../../../component/HistoryForm/input';
import DataContext from '../../../context/Data';

export default function AlterUserName() {
  const classes = Styles();
  const { loggedUser } = useContext(DataContext);
  const formRef = useRef(null);
  
  const handleSubmitUpdateUsername = (data) =>{
    if(data.username === ""){
      formRef.current.setFieldError('username', 'Por favor! Insira um nome de usuário')
    }
    console.log(data)
  }
  
  return (<div>
    <Form ref={formRef} initialData={ loggedUser } onSubmit={handleSubmitUpdateUsername} autoComplete="off">
      <Typography variant="h5">Alterar nome de usuário</Typography>
        <TextField className={classes.imput} name="username" label="Nome de usuário" />
      <Button variant="contained" color="primary" className={classes.button} type="submit">Alterar</Button>
    </Form>
  </div>)
}