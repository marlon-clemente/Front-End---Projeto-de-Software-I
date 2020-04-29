import React from 'react';
//import { Redirect } from 'react-router-dom';
import Box from '@material-ui/core/Box';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import FacebookIcon from '@material-ui/icons/Facebook';
import { IoLogoGoogle } from "react-icons/io";
import * as firebase from "firebase/app";

import Styles from './styles';
//import app from '../../../firebase';
const providerGoogle = new firebase.auth.GoogleAuthProvider();
const providerFacebook = new firebase.auth.FacebookAuthProvider();

export default function AuthUser() {
    
    const handleLoginGoogle = ()=>{
        firebase.auth().signInWithPopup(providerGoogle).then(function(result) {
            alert("Logado")
            // return <Redirect to="/home"/>
        }).catch(function(error) {
            alert(error)
        });
    
    }

    const handleLoginFacebook=()=>{
        firebase.auth().signInWithPopup(providerFacebook).then(function(result) {
            //okk
        }).catch(function(error) {
            alert(error)
        });
    }
    
    const classes = Styles();
    return (<>
        <meta name="theme-color" content="#2A3261"/>
        <div className={classes.section_description}>
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
        </div>
        
        <div className={classes.section_description_mob}>
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
        </div>

        <div className={classes.paper_buttons}>   
            <Button variant="contained"
                className={classes.buttonFace}
                startIcon={<FacebookIcon />}
                onClick={handleLoginFacebook}>
                Entrar com Facebook
            </Button>

            <Button variant="contained"
                className={classes.buttonGoogle}
                startIcon={<IoLogoGoogle />}
                onClick={handleLoginGoogle}>
                Entrar com Google
            </Button>
        </div>
    </>)
}
