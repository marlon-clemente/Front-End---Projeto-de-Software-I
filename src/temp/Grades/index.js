import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
    root: {
      padding: theme.spacing(1),
      [theme.breakpoints.down('xs')]: {
        backgroundColor: 'RED',
      },
      [theme.breakpoints.up('sm')]: {
        backgroundColor: 'BLUE',
      },
      [theme.breakpoints.up('md')]: {
        backgroundColor: 'GREEN',
      },
      [theme.breakpoints.up('lg')]: {
        backgroundColor: 'YELLOW',
      },
      [theme.breakpoints.up('xl')]: {
        backgroundColor: 'ORANGE',
      },
    },
  }));

  export default function Grades() {
    const classes = useStyles();
    return (
      <div className={classes.root}>
        <Typography variant="subtitle1">{'down(xs): Vermelho'}</Typography>
        <Typography variant="subtitle1">{'up(sm): Azul'}</Typography>
        <Typography variant="subtitle1">{'up(md): Verde'}</Typography>
        <Typography variant="subtitle1">{'up(lg): Amarelo'}</Typography>
        <Typography variant="subtitle1">{'up(xl): Laranja'}</Typography>
      </div>
    );
  }