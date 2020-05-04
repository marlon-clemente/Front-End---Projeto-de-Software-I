import React from 'react'
import { Form } from '@unform/web';
import Grid from '@material-ui/core/Grid';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Styles from './styles';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import { useSections } from '../../../../context/Sections';

import Title from '../../componentes/titleForm';
import Input from '../../../../component/Form/input';
import InputImg from '../../componentes/inputImg';

export default function NewMsg() {
  const classes = Styles();
  const { setCurrentSections } = useSections();
  const handleVoltar = () => {
    setCurrentSections("voltar");
  }

  function handleSubmit(data){
    console.log(data);
  }

  const initialData = {
    email:"",
  }

  return (
    <div className={classes.layout}>
      <Paper className={classes.paper}><Title/>
        <Form className={classes.form}
        initialData={initialData}
        onSubmit={handleSubmit}>
        <Grid container spacing={3}>
          {/* grid imagem */}
          <Grid item xs={12} xl={4} md={12} sm={12}
            className={classes.grid_img}>
            <InputImg />
          </Grid>
          {/* grid forms */}
          <Grid item xl={8} md={12} sm={12}>
            <Input name="identificacao"
              color="secondary"
              fullWidth
              label="Identificação"
              helperText="Nome do objeto | 
              Código do patrimonio escolar"/>



            <Input name="descricao"
              color="secondary"
              fullWidth
              multiline
              label="Descrição completa da situação"

            />
            {/* Mais inputs aki */}
          </Grid>
          {/* grid confirm */}
          <Grid item xs={12}><FormControlLabel
              control={<Checkbox color="secondary"
              name="concordar" value="yes" />}
              label="Você concorda em enviar
              essas informações? Lembre-se que 
              você está sendo identificado
              e não é possivel voltar atrás."/>
          </Grid>
        </Grid>

        <Grid container spacing={3}>
          {/* grid buttons */}
          <Grid item ><Button variant="contained"
              className={classes.button_c}
              fullWidth="true"
              onClick={handleVoltar}>
              Cancelar</Button>
          </Grid>
          
          <Grid item ><Button
              variant="contained"
              className={classes.button_e}
              color="secondary"
              fullWidth={true}
              type="submit">
              Enviar</Button>
          </Grid>
        </Grid>
      </Form>
    </Paper>
  </div>
  )
}
