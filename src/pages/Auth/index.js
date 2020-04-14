import React from 'react';
import Box from '@material-ui/core/Box';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import {Link} from 'react-router-dom';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import FacebookIcon from '@material-ui/icons/Facebook';
import { IoLogoGoogle } from "react-icons/io";

import UseStyles from './styles';

export default function Login(){
    const classes = UseStyles();
    return(
       <div>
        <Grid container component="main" className={classes.root}>
            <CssBaseline />
            <Grid item xs={false} sm={false} md={6} lg={6} xl={8} className={classes.image} />
                <Grid item xs={12} sm={12} md={6} lg={6} xl={4} className={classes.resp} component={Paper} elevation={6} square>
                    <div className={classes.paper}>
                        <Avatar className={classes.avatar}>
                            <LockOutlinedIcon />
                        </Avatar>
                        <Typography component="h2" fontWeight="fontWeightLight" variant="h5">
                            Bem vindo,
                        </Typography>
                        <Typography className={classes.boxH1}>
                            <Box
                                component="h1" 
                                fontFamily="Comic Neue"
                                fontWeight="fontWeightBold">
                                Aluno & Professor
                            </Box>
                        </Typography>

                        <Typography className={classes.boxTxt}>
                            <Box
                                component="h3"
                                textAlign="center"
                                fontWeight="fontWeightLight" 
                                fontFamily="Roboto">
                            Para contribuir com a direção de sua escola,
                            entre com uma das contas a seguir.
                            </Box>
                        </Typography>
                        
                        <Button
                            variant="contained"
                            className={classes.buttonFace}
                            startIcon={<FacebookIcon />}
                            component={Link}
                            to="/home"
                        >
                            Entrar com Facebook
                        </Button>

                        <Button
                            variant="contained"
                            className={classes.buttonGoogle}
                            startIcon={<IoLogoGoogle />}
                            component={Link}
                            to="/home"
                        >
                            Entar com Google
                        </Button>

                    </div>
                </Grid>
        </Grid>
        </div>
    );
}