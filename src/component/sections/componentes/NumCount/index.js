import React, {useState} from 'react';
import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box'
import { makeStyles } from '@material-ui/core/styles';
import Alert from '@material-ui/lab/Alert';
import AlertTitle from '@material-ui/lab/AlertTitle';
import IconButton from '@material-ui/core/IconButton';
import Collapse from '@material-ui/core/Collapse';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import CloseIcon from '@material-ui/icons/Close';
// import { Container } from './styles';

const useStyles = makeStyles((theme) => ({
  root:{
    display:'block',
    marginBlock: 2
  },
  buttonInfo:{
    position:'relative',
    marginTop: 2,
    marginRight: 2,
  },
  help:{
    marginBlock: 2
  },
  iconInterior:{
    marginTop: 2
  },
}));

function NumCount(props) {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  const handleButtonHelp = ()=>{
    setOpen(!open)
  }

  return (
    <div className={classes.root}>
      <IconButton 
        aria-label="delete" size="small"
        className={classes.buttonInfo}
        onClick={handleButtonHelp}>
        <HelpOutlineIcon fontSize="inherit" />
      </IconButton>

    <Typography component="div">
     <Box fontFamily="Roboto"
      fontSize={20}
      color="primary"
      fontWeight={500}>
      #{props.code}
      </Box></Typography>

      <Collapse in={open}>
        <Alert
          className={classes.iconInterior}
          action={
            <IconButton
              aria-label="close"
              color="inherit"
              size="small"
              onClick={() => {
                setOpen(false);
              }}
            >
              <CloseIcon fontSize="inherit" />
            </IconButton>
          }
          severity="info">
          <AlertTitle>Informação</AlertTitle>
          Esse código deve ser disponibilizado
          aos alunos e professores para que
          eles possam se cadastrar na aplicação
          e futuramente enviar relatos a direção escolar.
        </Alert>
      </Collapse>
    
    </div>
  );
}

export default NumCount;