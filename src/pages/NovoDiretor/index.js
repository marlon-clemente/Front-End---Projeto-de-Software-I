import React from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import {Form} from '@unform/web';

import Input from '../../component/HistoryForm/input'; 

import UseStyles from './styles';
export default function Registro() {
  const classes = UseStyles();
  
  function handleForm(data){
    console.log(data);
  }

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <Grid container wrap="nowrap" spacing={2}>          <Grid item xs>
          <Typography className={classes.titulo} component="h1" variant="h5" color="primary">
            <b>Cadastre-se</b>
          </Typography><Typography className={classes.subtitulo} component="h1" variant="body2" color="textSecondary">
            <i>Crie uma conta e entre na plataforma</i>
          </Typography>
             
          <Form className={classes.form}
            onSubmit={handleForm}
            noValidate>
            {/* Informações escolares */}
            <Input
              required fullWidth
              label="Razão social" name="school.social_reason"
              autoFocus
            />

            <Input
              required fullWidth
              label="Rua" name="school.address.street"
              autoFocus
            />

            <Input
              required fullWidth
              label="Número" name="school.address.number"
              autoFocus
            />

            <Input
              required fullWidth
              label="Complemento" name="school.address.complement"
              autoFocus
            />

            {/* Informações de usuário */}

            <Input
              required fullWidth
              label="Nome de usuario" name="username"
              autoFocus
            />

            <Input
              required fullWidth
              label="E-mail" name="email"
              autoComplete="user" autoFocus
            />
            <Input
              required fullWidth type="password"
              label="Senha" name="password"
              autoFocus
            />
            
            <Button 
              variant="contained" type="submit"
              color="primary" className={classes.submit}> Confirmar
            </Button>

            <Button 
              href="/" variant="contained" disableElevation
              color="primary" className={classes.submit}> voltar
            </Button>
                      
                      
                                                                                                              
          </Form>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
}