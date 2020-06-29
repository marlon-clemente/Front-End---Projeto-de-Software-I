import React, {useContext} from 'react';
import Styles from './styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import DataContext from '../../../context/Data';
import Menu from '../../../component/Menu2';
import {Form} from '@unform/web';
import Button from '@material-ui/core/Button';
import TextField from '../../../component/HistoryForm/input';

export default function ConfigSchool() {
  const classes = Styles();
  const { school } = useContext(DataContext);
  const handleSubmit = (data) =>{
    console.log(data)
  }

  return (
    <div className={classes.root}>
      <Menu title="Alterar Informações Escolares"/>
      <div className={classes.content}>
      <Typography variant="h5" component="h1" className={classes.title}>
        Alterar Informações Escolares
        <Divider />
      </Typography>
      <Form initialData={school} onSubmit={handleSubmit}>
        <Grid container spacing={3} className={classes.grid}>
        <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
          <TextField name="social_reason" label="Razão Social"/>
        </Grid >
        <Grid item xl={10} lg={10} md={10} sm={12} xs={12}>
          <TextField name="address.street" label="Rua"/>
        </Grid>
        <Grid item xl={2} lg={2} md={2} sm={12} xs={12}>
          <TextField name="address.number" label="Número" type="number"/>
        </Grid>
        <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
          <TextField name="address.complement" label="Complemento"/>
        </Grid>
        <Grid item xl={12} lg={12} md={12} sm={12} xs={12}> 
          <Button variant="contained" type="submit" color="primary" 
          className={classes.button}>Salvar alterações</Button>
        </Grid>
      </Grid>
      </Form>
      </div>
    </div>
  )
}
