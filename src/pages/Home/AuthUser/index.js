import React from 'react';
import Box from '@material-ui/core/Box';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import FacebookIcon from '@material-ui/icons/Facebook';
import { IoLogoGoogle } from "react-icons/io";

import * as firebase from "firebase";
import "firebase/auth";  

import Styles from './styles';

export default function AuthUser() {
    const classes = Styles();
    var provider = new firebase.auth.FacebookAuthProvider();
   
    const loginFacebook=()=>{
        firebase.auth().signInWithPopup(provider).then(function(result) {
            // This gives you a Facebook Access Token. You can use it to access the Facebook API.
            var token = result.credential.accessToken;
            // The signed-in user info.
            var user = result.user;
            // ...
        }).catch(function(error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            // The email of the user's account used.
            var email = error.email;
            // The firebase.auth.AuthCredential type that was used.
            var credential = error.credential;
            // ...
        });
    }
    
    return (
        <div className={classes.paper}>
            <Avatar className={classes.avatar}>
                <LockOutlinedIcon />
            </Avatar>
            <Typography component="div"><Box fontFamily="Lato"
                fontSize={20}
                fontWeight={300}
                textAlign="center">
                BEM VINDO
            </Box><Box fontFamily="Comic Neue"
                fontSize={25}
                fontWeight={800}
                textAlign="center">
                Aluno & Professor
            </Box><Box 
                fontSize={20}
                fontWeight={400}
                fontFamily="Lato"
                textAlign="center">
                Para contribuir com a direção de sua escola,
                entre com uma das contas a seguir.
            </Box></Typography>
                        
            <Button variant="contained"
                className={classes.buttonFace}
                startIcon={<FacebookIcon />}
                onClick={loginFacebook}>
                Entrar com Facebook
            </Button>

            <Button variant="contained"
                className={classes.buttonGoogle}
                startIcon={<IoLogoGoogle />}>
                Entrar com Google
            </Button>
        </div>
    )
}
