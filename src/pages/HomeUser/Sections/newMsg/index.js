import React from 'react'
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Styles from './styles';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import { useSections } from '../../../../context/Sections';

export default function NewMsg() {
  const classes = Styles();
  const { setCurrentSections } = useSections();
  const handleVoltar = () => {
    setCurrentSections("voltar");
  }
  return (
    <div className={classes.layout}>
      <Paper className={classes.paper}>
        <Typography variant="h4"
          align="center">Relatar um problema</Typography>
        <Grid container spacing={3}>
          {/* grid imagem */}
          <Grid item xl={4} md={12} sm={12}>
            <TextField
              required id="firstName"
              name="firstName" label="First name"
              fullWidth autoComplete="fname"
            />
          </Grid>
          {/* grid forms */}
          <Grid item xl={8} md={12} sm={12}>
            <TextField
              required
              id="id_obj"
              label="Indentificação do objeto:"
              fullWidth
              autoComplete="lname"
            />
            
            <TextField
              required
              id="lastName"
              name="lastName"
              label="Descrição completa"
              fullWidth
              autoComplete="lname"
            />
          </Grid>
          {/* grid confirm */}
          <Grid item xs={12}>
            <FormControlLabel
              control={<Checkbox color="secondary"
              name="concordar" value="yes" />}
              label="Você concorda em enviar
               essas informações? Lembre-se que 
               você está sendo indentificado
               e não é possivel voltar atrás."
            />
          </Grid>
          <Grid item xs={6}>
            <Button variant="contained"
              className={classes.button_c}
              onClick={handleVoltar}>
              Cancelar
            </Button>
          </Grid>
          <Grid item xs={6}>
            <Button variant="contained" color="secondary">
              Enviar
            </Button>
          </Grid>
        </Grid>
      </Paper>
    </div>
  )
}
