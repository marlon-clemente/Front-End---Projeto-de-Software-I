import React, {useState} from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import UseStyles from './styles';
export default function Registro() {
  const classes = UseStyles();
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("")

  return (
    <div className={classes.root}>

      <Paper className={classes.paper}>
        <Grid container wrap="nowrap" spacing={2}>          
          <Grid item xs>
               <Typography className={classes.titulo} component="h1" variant="h5" color="primary">
                     <b>Cadastre-se</b>
               </Typography>                      
               <Typography className={classes.subtitulo} component="h1" variant="body2" color="textSecondary">
                     <i>Crie uma conta e entre na plataforma</i>
               </Typography>
               
               <form className={classes.form} noValidate>
                      <TextField
                      variant="outlined"
                      margin="normal"
                      required
                      fullWidth
                      id="user"
                      label="Seu nome de usuario"
                      name="user"
                      autoComplete="user"
                      autoFocus
                      />

                        <TextField
                      variant="outlined"
                      margin="normal"
                      required
                      fullWidth
                      id="cpf"
                      label="Seu CPF"
                      name="cpf"
                      autoComplete="cpf"                            
                      />

                      <TextField
                      variant="outlined"
                      margin="normal"
                      required
                      fullWidth
                      id="email"
                      label="Seu e-mail"
                      name="email"
                      autoComplete="email"
                      onChange={
                        event=>{
                          setEmail(event.target.value)
                        }
                      }
                      />

                      <TextField
                      variant="outlined"
                      margin="normal"
                      required
                      fullWidth
                      name="password"
                      label="Senha"
                      type="password"
                      id="password"
                      autoComplete="current-password"
                      onChange={
                        event=>{
                          setSenha(event.target.value)
                        }
                      }
                      />
                  
                      <Button 
                      href="/"                            
                      variant="contained"
                      color="primary"
                      className={classes.submit}
                      > voltar
                      </Button>
                      
                      <Button
                      fullWidth
                      variant="contained"
                      color="primary"
                      className={classes.submit}
                      onClick={console.log(email + senha)}
                      >Cadastrar
                      </Button>
                                                                                                              
                 </form>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
}