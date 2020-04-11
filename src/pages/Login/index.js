import React from 'react';
import {Link} from 'react-router-dom';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';

import './styles.css';
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
                </Grid>
        </Grid>
        </div>
    );
}

/*
< div className = 'logon-container'>        
           <section className="form">           
                <form>            
                    <h1>Bem Vindo</h1>                
                    <h3 style={{opacity:0.6}}><i>Faça login para continuar </i></h3>
                
                    <input placeholder = "usuario"/>
                    <input type="password" placeholder = "senha"/>

                    <button className="button" type="submit"> Entrar</button>

                    <a>Não esta conseguindo entrar?
                        <Link to ="/Registro" variant="body2">{"Clique aqui"}</Link>
                    </a>                
                </form>
            </section>            
       </div>
*/