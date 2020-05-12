import React, { useContext, useCallback, useState} from 'react'
import {withRouter, Redirect} from 'react-router-dom';
import Button from '@material-ui/core/Button';
import Alert from '@material-ui/lab/Alert';
import TextField from '@material-ui/core/TextField';
import Box from '@material-ui/core/Box';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import Styles from './styles';

import loginApp from '../../../firebase';
import { AuthContext } from '../../../context/Auth';
import { useSections } from '../../../context/Sections'; 

const Login = ({history}) =>{     
  const classes = Styles();
  const { setCurrentSections } = useSections();
  
  var [requiredEmail,setRequiredEmail]=useState(false)
  var [requiredPassword,setRequiredPassword]=useState(false)
  const [alertForm, setAlertForm] = useState(<></>);
  
  const handleAlterBox = () =>{
        setCurrentSections(' ')
  }
  const handleSuport = () =>{
        setCurrentSections('rescuePassword')
  }
  
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
    <meta name="theme-color" content="#336666"/>
    
    <div className={classes.section_desktop}>
      <Typography component="div"><Box fontFamily="Lato"
        fontSize={25} fontWeight={400}
        textAlign="center">BEM VINDO DIREÇÃO
        </Box><Box fontFamily="Roboto"
        fontSize={18} fontWeight={300}
        textAlign="center">Efetue login na continuar
        na plataforma.</Box>
      </Typography>               
    </div>

    <div className={classes.section_mobile}>
      <Typography component="div">
        <Box fontFamily="Roboto" color="#ffffff"
        fontSize={18} fontWeight={400} m={0}
        >Bem vindo
        </Box><Box fontFamily="Roboto" m={0}
        fontSize={45} fontWeight={600} color="#ffffff"
        >Direção</Box>
      </Typography>               
    </div>

    <form className={classes.form} 
      onSubmit={handleLogin}              
      noValidate>                   
      <TextField
        variant="outlined" margin="normal"
        required fullWidth
        id="email" label="Endereço de e-mail da escola"
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
        className={classes.button}                                 
        type="submit"                
      > Entrar
      </Button>

      <Typography component="div" color="primary">
        <Box mt={1}
          fontFamily="Roboto"
          onClick={handleSuport}
          fontSize={16}
          color="primary"
          fontWeight={500}
          textAlign="right">
          <Link href="#" onClick={handleSuport} color="inherit">
            Esqueceu sua senha?
          </Link>
        </Box></Typography><Typography>
        <Box fontFamily="Roboto"
          m={3}
          fontSize={18}
          onClick={handleAlterBox}
          fontWeight={300}
          textAlign="center">
          <Link href="#" onClick={handleAlterBox} color="inherit">
            Acesso do aluno e professor
          </Link>
        </Box>
      </Typography>
    </form>
  
  </div>
  )
};

export default withRouter(Login);
