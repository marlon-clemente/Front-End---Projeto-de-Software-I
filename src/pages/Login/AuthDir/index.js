import React, { useContext, useState } from 'react'
import {withRouter, Redirect} from 'react-router-dom';
import Button from '@material-ui/core/Button';
import Alert from '@material-ui/lab/Alert';
import TextField from '@material-ui/core/TextField';
import Box from '@material-ui/core/Box';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import Styles from './styles';
import Logo from '../../../assets/logo.svg'

import { useSections } from '../../../context/Sections';
import DataContext from '../../../context/Data';

const Login = ({history}) =>{     
  const classes = Styles();
  const { setCurrentSections } = useSections();
  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [requiredEmail, setRequiredEmail] = useState(false)
  const [requiredPassword, setRequiredPassword] = useState(false)
  const [alertForm, setAlertForm] = useState(<></>);
  
  const handleAlterBox = () =>{
    setCurrentSections(' ')
  }
  const handleSuport = () =>{
    setCurrentSections('rescuePassword')
  }
  
  const { handleLogin, loggedUser } = useContext(DataContext);

  if(Object.keys(loggedUser).length){
    return <Redirect to="/redirect" />
  }
  return(
  <div className={classes.paper}>
    <meta name="theme-color" content="#336666"/>
    
    <div className={classes.section_desktop}>
      <Typography component="div">
        <Box 
          fontFamily="Lato"
          fontSize={25}
          fontWeight={400}
          textAlign="center"
        >BEM VINDO DIREÇÃO ESCOLAR
        </Box>
        <Box
          fontFamily="Roboto"
          fontSize={18}
          fontWeight={300}
          textAlign="center"
        >Efetue login para acessar a plataforma.
        </Box>
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

    <form 
      className={classes.form} 
      noValidate
      onSubmit={ (event) => {
        event.preventDefault()
        setLoading(true);
        if (!email)
          setRequiredEmail(true);
        if (!password)
          setRequiredPassword(true);

        if (email && password)
          handleLogin({ email, password }, (status, error) => {
            if (error?.response?.status > 300) {
              setAlertForm(
                <Alert severity="error">
                  Seu e-mail e sua senha não correspondem!
                </Alert>
              );
            } else {
              status === 200 && history.push('/redirect')
            }
            setLoading(false);
          });
      } }
    >
      <TextField
        variant="outlined"
        margin="normal"
        required
        fullWidth
        id="email" 
        name="email"
        autoComplete="email"                        
        label="Endereço de e-mail da escola"
        error = {requiredEmail}
        onChange={event => {
          setRequiredEmail(false);
          setEmail(event.target.value)
        }}
      />
      <TextField                       
        variant="outlined"
        margin="normal"
        required
        fullWidth
        id="password"
        name="password"
        type="password"
        label="Senha"
        autoComplete="current-password"                                                                        
        onChange={event => {
          setRequiredPassword(false);
          setPassword(event.target.value)
        }}
        error = {requiredPassword}                                           
      />
      { alertForm }
      <Button
        fullWidth
        variant="contained"
        color="primary"                
        className={classes.button}                                 
        type="submit"
      > { loading ? 'Carregando...' : 'Entrar' }
      </Button>
      <Box textAlign="right" fontFamily="Roboto"
        fontSize={18} fontWeight={700} m={1} 
        color="primary">
        <Link className={classes.link} onClick={handleSuport}>
        Esqueceu sua senha?</Link>
      </Box>
    </form>

    <Box fontFamily="Roboto"
      onClick={handleAlterBox} fontSize={18}
      color="primary" fontWeight={300}
      textAlign="center">
      <Link className={classes.link} onClick={handleAlterBox} color="inherit">
      Acesso do aluno e professor</Link>
    </Box>
  </div>
  )
};

export default withRouter(Login);
