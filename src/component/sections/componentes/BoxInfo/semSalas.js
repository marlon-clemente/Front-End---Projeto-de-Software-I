import React from 'react';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root:{
    padding: '25px',
  }
}));

export default function BoxInfo() {
  const classes = useStyles();
  return(
    <div className={classes.root}>
      <Typography component="div">
        <Box fontFamily="Lato" fontSize={20}
          fontWeight={500}>
          Não há salas cadastradas!
        </Box>

        <Box fontFamily="Roboto" 
          fontSize={16}
          color="#636466"
          fontWeight={300}>
          Manter as salas da escola registradas
          na aplicação auxilía qualquer usuário a identificar
          os bens patrimonias que necessitam de uma atenção. 
               
        </Box>
    </Typography>
    </div>
  );
}
