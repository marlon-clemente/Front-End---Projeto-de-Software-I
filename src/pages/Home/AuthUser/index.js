import React from 'react';
import Box from '@material-ui/core/Box';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import FacebookIcon from '@material-ui/icons/Facebook';
import { IoLogoGoogle } from "react-icons/io";
import Styles from '../sytles';

export default function AuthUser() {
    const classes = Styles();
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
                startIcon={<FacebookIcon />}>
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
