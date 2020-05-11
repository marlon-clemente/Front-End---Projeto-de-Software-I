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
    marginBottom: 8
  },
  margin:{
    margin: 3
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
          <Typography>
            <Box
            fontFamily="Lato"
            fontWeight={500}
            alignContent="center"
            height="24px"
            fontSize={22}>
            {props.title}
            </Box>
          </Typography>
        </div>
      ) : (
        <div>
          <Typography>
            <IconButton
              className={classes.margin}
              onClick={handleIconButton}>
              <ArrowBackIcon/>
            </IconButton>
        
            <Box
            fontFamily="Lato"
            fontWeight={500}
            alignContent="center"
            height="24px"
            fontSize={22}>
            {props.title}
            </Box>
          </Typography>
        </div>
      )
      }
  </div>)
}
