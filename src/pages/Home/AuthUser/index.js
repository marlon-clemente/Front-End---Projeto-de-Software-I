import React from 'react';
import Box from '@material-ui/core/Box';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import {Link} from 'react-router-dom';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import FacebookIcon from '@material-ui/icons/Facebook';
import { IoLogoGoogle } from "react-icons/io";
import Styles from '../sytles';

import { useAuth } from '../../../functions/Auth';

export default function AuthUser() {
    const classes = Styles();
    const { singInGoogle } = useAuth(); 
    function handleSignInGoogle(e){
        e.preventDefault();
        singInGoogle();
    }

    return (
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
                        >
                            Entrar com Facebook
                        </Button>

                        <Button
                            variant="contained"
                            className={classes.buttonGoogle}
                            startIcon={<IoLogoGoogle />}
                            onClick={
                                e => handleSignInGoogle(e)}
                            >
                        >
                            Entrar com Google
                        </Button>
        </div>
    )
}
