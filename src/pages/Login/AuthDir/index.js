import React, { useContext, useCallback, useState} from 'react'
import {withRouter, Redirect} from 'react-router-dom';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import Styles from './styles';

import loginApp from '../../../firebase';
import { AuthContext } from '../../../context/Auth';

// validação (email e senha ) e (validação TextField)
const Login = ({history}) =>{
        
    const classes = Styles();
  
    const [userInput, setUserInput] = useState('')
    const [userInputEmail, setUserInputEmail] = useState('')
    var [requiredEmail,setRequiredEmail]=useState(false)
    var [requiredPassword,setRequiredPassword]=useState(false)
 
    const handleLogin = useCallback(
        async event => {
          event.preventDefault();
          const { email, password } = event.target.elements;
          
          if(email.value.length==0){           
            setUserInputEmail("obrigatório")            
            setRequiredEmail(true)
          }else if(password.value.length==0){
            setUserInput("obrigatório")
            setRequiredPassword(true)                
          }
          
          try {
            await loginApp
              .auth()
              .signInWithEmailAndPassword(email.value, password.value);
            history.push("/");
          } catch (error) {
            var errorCode = error.code;
            if(errorCode=="auth/user-not-found"){
               alert("usuario incorreto");                   
            }else if(errorCode=="auth/wrong-password"){
               alert("senha incorreta");                   
            }else if(errorCode=="auth/invalid-email"){
               alert(" e-mail invalido");           
            }                                
          }
        },
        [history]
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
                        helperText={userInputEmail}  
                        error = {requiredEmail}                  
                    />
                    <TextField                       
                        variant="outlined" margin="normal"
                        required fullWidth
                        name="password" label="Senha"
                        type="password" id="password"
                        autoComplete="current-password"                                                                         
                        helperText={userInput}   
                        error = {requiredPassword}                                           
                    />
                   
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
