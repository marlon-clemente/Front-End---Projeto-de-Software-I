import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Logo from'../../assets/logo.svg'
import { useSections } from '../../context/Sections'; 
import Styles from './styles';
import AuthDir from './AuthDir';
import AuthUser from './AuthUser';
import RescuePassword from './rescuePassword';

export default function Ajuda() {
    const classes = Styles();
    const { currentSections } = useSections();
    return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid xs={false} sm={false} md={false} lg={6} xl={8} className={classes.image} />
        <Grid item xs={12} sm={12} md={12} lg={6} xl={4}
          component={Paper} elevation={6} square>
          <Box alignItems="center" display="flex" className={classes.block_logo}>
            <div className={classes.external_logo}>
              <img className={classes.logo} src={Logo}/>
            </div>
            <Typography className={classes.title} component="div">SISGEPE</Typography>
          </Box>
          {
          currentSections === 'loginDir' ? (<AuthDir/>) : 
          currentSections === 'rescuePassword' ? (<RescuePassword/>) : (<AuthUser/>)
          }
        </Grid>
    </Grid>
  );
}
