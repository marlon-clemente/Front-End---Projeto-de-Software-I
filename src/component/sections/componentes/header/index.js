import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import IconButton from '@material-ui/core/IconButton';

import { useSections } from '../../../../context/Sections';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    marginBottom: 8,
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
      { props.noIcon ? (
        <div>
          <Typography component="div">
            <Box fontFamily="Lato"
            fontWeight={500} alignContent="center"
            height="24px" fontSize={22}>
            {props.title}
            </Box>
          </Typography>
        </div>
        ) : (
        <div>
          <Typography component="div">
            <Box m={1} fontFamily="Lato"
            fontWeight={500} height="24px"
            fontSize={22}>
            <IconButton className={classes.margin}
              onClick={handleIconButton}>
              <ArrowBackIcon/>
            </IconButton>
            {props.title}
            </Box>
          </Typography>
        </div>
      )
      }
  </div>)
}
