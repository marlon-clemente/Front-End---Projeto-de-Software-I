import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import IconButton from '@material-ui/core/IconButton';

import Title from "../../../../component/Title";

import { useSections } from '../../../../context/Sections';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
}));



export default function Header(props) {
  const classes = useStyles();
  const { setCurrentSections } = useSections();
  
  const handleIconButton = () =>{
    setCurrentSections(props.returnTo);
  }
  
  return (
    <div className={classes.root}>
      <IconButton 
        aria-label="delete"
        className={classes.margin}
        onClick={handleIconButton}>
        <ArrowBackIcon fontSize="large"/>
      </IconButton>
      <Title>{ props.title }</Title>
    </div>
  )
}
