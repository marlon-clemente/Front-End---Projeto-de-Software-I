import React, { useContext, useCallback, useState} from 'react'
import {withRouter, Redirect} from 'react-router-dom';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import Alert from '@material-ui/lab/Alert';
import TextField from '@material-ui/core/TextField';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import Styles from './styles';

import loginApp from '../../../firebase';
import { AuthContext } from '../../../context/Auth';

const Login = ({history}) =>{     
  const classes = Styles();
  
  var [requiredEmail,setRequiredEmail]=useState(false)
  var [requiredPassword,setRequiredPassword]=useState(false)
  const [alertForm, setAlertForm] = useState(<></>);
 
  const handleLogin = useCallback(
    async event => {
      event.preventDefault();
      const { email, password } = event.target.elements;

      if(email.value.length===0 &&
         password.value.length===0){           
        setRequiredEmail(true);
        setRequiredPassword(true);
        setAlertForm(<Alert severity="error">
            Por favor! Digite seu e-mail e sua senha!
          </Alert>
        );              
      }
      else if(email.value.length===0 
        && password.value.length!==0){           
        setRequiredEmail(true);
        setRequiredPassword(false);
        setAlertForm(<Alert severity="error">
            Por favor! Digite seu e-mail!
          </Alert>
        );              
      }
      else if(email.value.length!==0
        && password.value.length===0){           
        setRequiredPassword(true);
        setRequiredEmail(false);
        setAlertForm(<Alert severity="error">
            Por favor! Digite sua senha!
          </Alert>
        );              
      }
      else{
        try {
          await loginApp
            .auth()
            .signInWithEmailAndPassword(email.value, password.value);
          history.push("/");
        } catch (error) {
            var errorCode = error.code;
            if(errorCode==="auth/user-not-found" ||
               errorCode==="auth/wrong-password" ){
                setRequiredEmail(true);
                setRequiredPassword(true);
                setAlertForm(
                <Alert 
                  severity="error">
                  Seu e-mail e sua senha não correspondem!
                </Alert>
            );                 
          }else if(errorCode==="auth/invalid-email"){
            setRequiredEmail(true);
            setRequiredPassword(true);
            setAlertForm(
              <Alert 
                severity="error">
                Por favor! Digite um e-mail válido!
              </Alert>
            );           
          }                                
        }
      }
    }
    ,[history]
  );
    
  const { currentUser } = useContext(AuthContext);
  if(currentUser){
      return <Redirect to="/" />
  }
  return(    
  <div className={classes.paper}>
    <Avatar className={classes.avatar}>
      <LockOutlinedIcon />
    </Avatar>
    <Typography className={classes.titulo} component="h1" variant="h5" color="primary">
      <b>Bem Vindo</b>
    </Typography>
    <Typography className={classes.subtitulo} component="h1" variant="body2" color="textSecondary">
      <i>Faça login para continuar</i>
    </Typography>                
              
    <form className={classes.form} 
      onSubmit={handleLogin}              
      noValidate>                   
      <TextField
        variant="outlined" margin="normal"
        required fullWidth
        id="email" label="Endereço de e-mail"
        name="email" autoComplete="email"                        
        autoFocus
        error = {requiredEmail}                  
      />
      <TextField                       
        variant="outlined" margin="normal"
        required fullWidth
        name="password" label="Senha"
        type="password" id="password"
        autoComplete="current-password"
        autoFocus                                                                         
        error = {requiredPassword}                                           
      />
      { alertForm }
      <Button
        fullWidth
        variant="contained"
        color="primary"                
        className={classes.submit}                                 
        type="submit"                
      > Entrar
      </Button>

      <Box mt={5}>
        <Typography variant="body2" color="textSecondary" align="center">
          Não está conseguindo entrar? Clique aqui.
        </Typography>
      </Box>
    </form>
  </div>
  )
};

export default withRouter(Login);
