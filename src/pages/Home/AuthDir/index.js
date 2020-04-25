import React, { useState } from 'react'
import {Link} from 'react-router-dom';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import Styles from '../sytles';

import { useAuth } from '../../../functions/Auth';

export default function AuthDir({onClick}) {
    const classes = Styles();
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const { signInDir } = useAuth();

    function handleSignin(e, email, password) {
        e.preventDefault();
        signInDir(email, password);
    }

    return (
        <div className={classes.paper}>
            <Avatar className={classes.avatar}>
                <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
                Faça login para continuar
            </Typography>
            <form className={classes.form} noValidate>
                <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="email"
                label="Endereço de e-mail"
                name="email"
                autoComplete="email"
                autoFocus
                onChange={event => {
                    setEmail(event.target.value)
                }}

                />
                <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                name="password"
                label="Senha"
                type="password"
                id="password"
                autoComplete="current-password"
                onChange={event =>{
                    setSenha(event.target.value)
                }
                }
                />
                <Button
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
                onClick={
                    e => handleSignin(e, email, senha)}
                >
                    Entrar
                </Button>
                <Box mt={5}>
                    <Typography variant="body2" color="textSecondary" align="center">
                        Não está conseguindo entrar?
                        {' '}
                        <Link href="#">
                            Clique aqui
                        </Link>{'.'}
                    </Typography>
                </Box>
            </form>
        </div>
    )
}
