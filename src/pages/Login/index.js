import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Paper from '@material-ui/core/Paper';
// import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';

import { useSections } from '../../context/Sections'; 
import Styles from './styles';
import AuthDir from './AuthDir';
import AuthUser from './AuthUser';

export default function Ajuda() {
    const classes = Styles();
    const { currentSections } = useSections();
    return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid xs={false} sm={false} md={6} lg={6} xl={8} className={classes.image} />
        <Grid item xs={12} sm={12} md={6} lg={6} xl={4}
          component={Paper} elevation={6} square>
          {
          currentSections === 'loginDir' ? (<AuthDir/>) : 
          currentSections === 'rescuePassword' ? (<>rescue</>) : (<AuthUser/>)
          }
        </Grid>
    </Grid>
  );
}
