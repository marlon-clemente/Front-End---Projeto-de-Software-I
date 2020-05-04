import React from 'react';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    fontFamily:'Lato',
    fontSize: '24px',
    fontWeight: 400,
  },
}));

export default function TextImput() {
  const classes = useStyles();
  return (
    <div>
      <Typography className={classes.root} 
        align="center">Relatar um problema
      </Typography>
      <Divider />
    </div>
  )
}
