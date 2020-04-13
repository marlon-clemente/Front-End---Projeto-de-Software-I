import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import FacebookIcon from '@material-ui/icons/Facebook';
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
                        <Typography component="h2" variant="h5">
                            Bem vindo
                        </Typography>
                        <Typography component="h1" variant="h5">
                            Aluno e professor
                        </Typography>
                        <Typography component="body" variant="h8">
                            Para contribuir com a direção de sua escola, logue-se
                            em uma das contas a seguir.
                        </Typography>
                        
                        <Button
                            variant="contained"
                            color="secondary"
                            className={classes.button}
                            startIcon={<FacebookIcon />}
                        >
                            Logar com Facebook
                        </Button>

                        <Button
                            variant="contained"
                            color="secondary"
                            className={classes.button}
                            startIcon={<FacebookIcon />}
                        >
                            Logar com Google
                        </Button>

                    </div>
                </Grid>
        </Grid>
        </div>
    );
}