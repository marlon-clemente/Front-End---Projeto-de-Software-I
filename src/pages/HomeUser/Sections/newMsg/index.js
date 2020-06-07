import React, { useContext, useEffect, useState } from 'react'
import { Form } from '@unform/web';
import Grid from '@material-ui/core/Grid';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Styles from './styles';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Autocomplete from '@material-ui/lab/Autocomplete';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

import { useSections } from '../../../../context/Sections';
import DataContext from '../../../../context/Data';

import Title from '../../componentes/titleForm';
import Input from '../../../../component/Form/input';

import InputImg from '../../componentes/inputImg';

export default function NewMsg() {
  const classes = Styles();
  const { setCurrentSections } = useSections();
  const [agreement, setAgreement] = useState(false);
  const [response, setResponse] = useState(false);
  const {
    fetchClassrooms,
    fetchingData,
    classrooms,
    handleSaveTicket
  } = useContext(DataContext);

  const getClassrooms = async() => {
    await fetchClassrooms();
  }

  useEffect(() => {
    if (!classrooms.length)
      getClassrooms();
  }, []);

  const handleVoltar = () => {
    setCurrentSections("voltar");
  }

  function handleSubmit({ title, classroom, description }){
    handleSaveTicket({ title, classroom, description, agreement }, ({ message }, error) => {
      if (error) {
        setResponse({ type: 'error', error });
      } else {
        setResponse({ type: 'success', message });
      }
    })
  }

  return (
    <div className={classes.layout}>
      <Paper className={classes.paper}><Title/>
        <Form 
          className={classes.form}
          onSubmit={handleSubmit}
        >
        <Grid container spacing={3}>
          {/* grid imagem */}
          <Grid item xs={12} xl={4} md={12} sm={12}
            className={classes.grid_img}>
            <InputImg />
          </Grid>
          {/* grid forms */}
          <Grid item xl={8} md={12} sm={12}>
            <Input 
              name="title"
              color="secondary"
              label="Identificação"
              helperText="Nome do objeto | 
              Código do patrimonio escolar"
            />

            <Autocomplete
              options={ classrooms }
              getOptionLabel={(option) => option.identifier}
              renderInput={(params) => <Input 
                  {...params}
                  name="classroom"
                  label={ fetchingData ? 'Buscando salas...' : 'Selecione uma sala' }
                  color="secondary"
              />}
            />
            
            <Input
              name="description"
              color="secondary"
              multiline
              label="Descrição completa da situação"
            />

            {/* Mais inputs aki */}
          </Grid>
          {/* grid confirm */}
          <Grid item xs={12}>
            <FormControlLabel
              control={
                <Checkbox 
                  color="secondary"
                  name="state"
                  onChange={event => setAgreement(event.target.checked)}
                />
              }
              label="Você concorda em enviar
              essas informações? Lembre-se que 
              você está sendo identificado
              e não é possivel voltar atrás."
            />
          </Grid>
        </Grid>

        <Grid container spacing={3}>
          {/* grid buttons */}
          <Grid item ><Button variant="contained"
              className={classes.button_c}
              fullWidth
              onClick={handleVoltar}>
              Cancelar</Button>
          </Grid>
          
          <Grid item >
            <Button
              variant="contained"
              className={classes.button_e}
              color="secondary"
              fullWidth
              type="submit"
            >
              Enviar
            </Button>
          </Grid>
        </Grid>
      </Form>
    </Paper>
    <Dialog
      open={Object.keys(response).length ? true : false}
      aria-labelledby="response-dialog-title"
      aria-describedby="response-dialog-description"
    >
      <DialogTitle id="response-dialog-title">
        { response.type === 'error' ? `Erro: ${response.error.name}` : `Sucesso!` }
      </DialogTitle>
      <DialogContent>
        <DialogContentText id="response-dialog-description">
          { response.type === 'error' ? response.error.message : response.message }
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button 
          color="secondary"
          onClick={handleVoltar}
        >
          Fechar
        </Button>
      </DialogActions>
    </Dialog>
  </div>
  )
}
