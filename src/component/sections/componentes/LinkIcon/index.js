import React from 'react';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import LockIcon from '@material-ui/icons/Lock';
import SchoolIcon from '@material-ui/icons/School';

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: 6,
    marginBottom: 0,
    display: 'flex',
    color: theme.palette.primary.main,
    alignContent: 'center',
  },
  icon: {
    margin: 'auto'
  }
}));

export default function LinkIcon(props) {
  const classes = useStyles();

  return(
    <div className={classes.root}>
      {props.icon === 'LockIcon' ? (<LockIcon className={classes.root}/>):(<></>)}
      {props.icon === 'SchoolIcon' ? (<SchoolIcon className={classes.root}/>):(<></>)}

      <Typography component="div"><Box 
        fontFamily="Roboto" fontSize={16}
        fontWeight={500} m={1}
        textAlign="left">
        <Link href={props.link}>
        {props.label}
        </Link></Box>
      </Typography>
    </div>
  );
}