import React from 'react';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root:{
    paddingLeft: '25px',
    paddingRight: '25px'
  }
}));

export default function Title(props) {
  const classes = useStyles();
  return(
    <div className={classes.root}><Typography component="div">
     <Box fontFamily="Lato" 
      fontSize={20}
      fontWeight={500}>
      {props.title}
      </Box>

      <Box fontFamily="Roboto" 
      fontSize={16}
      color="#636466"
      fontWeight={400}>
      {props.city}
      </Box>
    </Typography>
    </div>
  );
}