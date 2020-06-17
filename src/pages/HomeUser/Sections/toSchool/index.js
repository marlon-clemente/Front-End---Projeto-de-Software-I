import React, {useState, useContext} from 'react';
import Styles from './styles';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { Box } from '@material-ui/core';
import Logo from '../../../../assets/logo.svg';
import DataContext from '../../../../context/Data';
import Alert from '@material-ui/lab/Alert';
import Snackbar from '@material-ui/core/Snackbar';
import { useSections } from '../../../../context/Sections';

export default function ToSchool({props}) {
  const classes = Styles();
  const { setCurrentSections } = useSections();
  const [schoolIdHash, setSchoolIdHash] = useState();
  const [response, setResponse] = useState({});
  const { subscribeUserToSchool, handleLogout } = useContext(DataContext);

  const handleClick = () => {
    subscribeUserToSchool(schoolIdHash, (res, error) => {
      if (error) {
        setResponse({ type: 'error', error});
      } else {
        const { data: { message } } = res;
        setResponse({ type: 'success', message });

        setCurrentSections('voltar')
      }
    });   
  }

  return (
    <div className={classes.root}>
      <img className={classes.logo} src={Logo}/>
      
      <Typography align="center">
       Bem vindo a plataforma <br/> SISGEPE
      </Typography>
      <Typography align="center">
        Para prosseguir,
        digite o <b>Código Identificador</b> de
        sua escola.
      </Typography>
      <Typography component="div" align="center">
        <Box m={1} color="text.secondary">O diretor da sua escola poderá 
        fornecer esse código para você!</Box>
      </Typography>
      
      <TextField autoFocus
        margin="dense"
        id="schoolIdHash"
        label="Código identificador"
        type="number"
        onChange={(event) => setSchoolIdHash(event.target.value)}
        value={schoolIdHash}
        fullWidth
        color="secondary"/>
      
      <Snackbar open={Object.keys(response).length ? true : false}
        autoHideDuration={6000}>
        { response.type === 'error' ? (<Alert severity="error">
          Ops — {response.error.message}
          </Alert>) : (<Alert severity="success">
          Sucesso.. Por favor, aguarde...
          </Alert>)
        }
      </Snackbar>

      <Button variant="contained" color="secondary"
        className={classes.button} disableElevation
        onClick={handleClick}>
        Confirmar
      </Button>

      <Button variant="contained" onClick={handleLogout}
        className={classes.button} disableElevation>
        Sair
      </Button>
    </div>
  );
}