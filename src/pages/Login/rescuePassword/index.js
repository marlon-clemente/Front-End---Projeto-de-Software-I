import React from 'react';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';

import Styles from './styles.js';
import { useSections } from '../../../context/Sections'; 

export default function RescuePassword() {
  const classes = Styles();
  const { setCurrentSections } = useSections();
  const handleCancel = () => setCurrentSections('loginDir');
  const handleRescue = () => console.log()

  return(
    <div className={classes.section}>
      <Typography component="div"><Box fontFamily="Lato"
        fontSize={22} m={4} fontWeight={400}
        textAlign="center">Esqueceu sua senha?
        </Box><Box fontFamily="Roboto"
        fontSize={16} fontWeight={200} m={2}
        textAlign="center">Para solicitar uma nova 
        senha, digite o e-mail que sua escola utiliza pra
        acessar a plataforma.</Box>
      </Typography>  
      <form className={classes.form} 
        onSubmit={handleRescue}              
        noValidate>
        <TextField
          variant="outlined" margin="normal"
          required fullWidth
          id="email" label="Endereço de e-mail"
          name="email" autoComplete="email"                        
          autoFocus                  
        />
        <Button
          className={classes.button}
          variant="contained"
          type="submit"
          >Confirmar
        </Button>
      </form>

      <Typography component="div" color="primary">
        <Box mt={1}
          fontFamily="Roboto"
          onClick={handleCancel}
          fontSize={16}
          color="primary"
          fontWeight={500}
          textAlign="right">
          <Link href="#" onClick={handleCancel} color="primary">
            Cancelar
          </Link>
        </Box></Typography>

    </div>
  ) 
}