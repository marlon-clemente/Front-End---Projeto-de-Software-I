import React from 'react';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';
import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
  root: {
    '& svg': {
      margin: theme.spacing(1.5),
    },
    '& hr': {
      margin: theme.spacing(0, 0.5),
    },
  }
}))

export default function BoxDefault() {
  const classes = useStyles();
  return(
    <div className={classes.root}>
      <Grid className={classes.root} container alignItems="center">
        <Typography component="div"><Box m={4}
          fontFamily="Roboto" textAlign="center"
          fontSize="18px" color="#636466">
          Icon
        </Box></Typography>
        <Divider orientation="vertical" flexItem />
        <Typography component="div">
          <Box m={4}
            fontFamily="Roboto" textAlign="center"
            fontSize="18px">
            Não há nenhum bem patrimonial em analise no momento
          </Box>
          <Box m={4}
            fontFamily="Roboto" textAlign="center"
            fontSize="18px" color="#636466">
            Você pode adicionar um bem clicando no botão ""
            no canto inferior da tela 
          </Box>
          <Box m={4}
            fontFamily="Roboto" textAlign="center"
            fontSize="18px" color="#636466">
            
          </Box>
        </Typography>
      </Grid>
    </div>
  );
}
