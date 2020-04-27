import React, { useContext, useCallback } from 'react'
import {withRouter, Redirect} from 'react-router-dom';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import Styles from '../sytles';

import loginApp from '../../../firebase';
import { AuthContext } from '../../../context/Auth';

const Login = ({history}) =>{
    const classes = Styles();

    const handleLogin = useCallback(
        async event => {
          event.preventDefault();
          const { email, password } = event.target.elements;
          try {
            await loginApp
              .auth()
              .signInWithEmailAndPassword(email.value, password.value);
            history.push("/");
          } catch (error) {
            alert(error);
          }
        },
        [history]
      );
    
    const { currentUser } = useContext(AuthContext);
    
    if(currentUser){
        return <Redirect to="/" />
    }

    return(
        <div className={classes.paper}>
            <Avatar className={classes.avatar}>
                <LockOutlinedIcon />
            </Avatar><Typography component="h1" variant="h5">
                 Faça login para continuar
             </Typography>
             <form className={classes.form} 
                onSubmit={handleLogin}
                noValidate>
                    <TextField
                        variant="outlined" margin="normal"
                        required fullWidth
                        id="email" label="Endereço de e-mail"
                        name="email" autoComplete="email"
                        autoFocus
                    />
                    <TextField
                        variant="outlined" margin="normal"
                        required fullWidth
                        name="password" label="Senha"
                        type="password" id="password"
                        autoComplete="current-password"
                    
                    />

                 <Button
                 fullWidth
                 variant="contained"
                 color="primary"
                 className={classes.submit}
                 type="submit"
                 >
                     Entrar
                 </Button>

                 <Box mt={5}>
                     <Typography variant="body2" color="textSecondary" align="center">
                         Não está conseguindo entrar? Clique aqui.
                     </Typography>
                 </Box>
             </form>

        </div>
    )
};

export default withRouter(Login);