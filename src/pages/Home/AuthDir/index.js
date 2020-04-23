import React from 'react'
import {Link} from 'react-router-dom';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import Styles from '../sytles';

//import Paper from '@material-ui/core/Paper';
//import Grid from '@material-ui/core/Grid';
//import CssBaseline from '@material-ui/core/CssBaseline';

export default function AuthDir() {
    const classes = Styles();
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
                />
                <Button
                href="/dashboard"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
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
