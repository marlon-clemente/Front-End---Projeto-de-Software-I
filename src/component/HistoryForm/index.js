import React, { useContext, useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Form } from '@unform/web';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Autocomplete from '@material-ui/lab/Autocomplete';
import Input from './input';
import DataContext from '../../context/Data';

const useStyles = makeStyles((theme) => ({
  button: {
    marginTop: theme.spacing(3),
    width: '100%',
  },
}));

export default function HistoryForm({ activityInfo, handleError, handleResponse, onCloseAction, classroomSlug, ticketId }) {
  const classes = useStyles();
  const situations = [
    'Aguardando aceitação',
    'Aceito pela diretoria',
    'Encaminhado para conserto',
    'Encerrado'
  ];

  const [situation, setSituation] = useState('');
  const [description, setDescription] = useState('');

  useEffect(() => {
    setSituation(activityInfo.situation);
    setDescription(activityInfo.description);
  }, [])

  const { makeRequest, school: { id_hash: schoolIdHash} } = useContext(DataContext);
  
  const handleSubmit = ({ situation, description }) => {
    const isUpdate = Object.keys(activityInfo).length > 0;

    makeRequest({
      verb: isUpdate ? 'put' : 'post',
      body: { situation, description },
      endpoint: `/schools/${schoolIdHash}/classrooms/${classroomSlug}/tickets/${ticketId}/history/${isUpdate ? activityInfo.id : ''}`
    }, (res, error) => {
      if (error)
        handleError(error);
      
      handleResponse(res);
      onCloseAction();
    });
  }
  
  return (
    <Form onSubmit={handleSubmit}> 
      <Autocomplete
        value={situation}
        onChange={event => setSituation(event.target.innerText)}
        options={ situations }
        getOptionLabel={(option) => option}
        renderInput={(params) => (
          <Input 
            {...params}
            name="situation"
            label='Selecione uma situação'
            color="primary"
          />
        )}
      />
      
      <Input
        name="description"
        helperText=" "
        color="primary"
        multiline
        fullWidth
        label="Descrição completa da situação"
        value={description}
        onChange={event => setDescription(event.target.value)}
      />

      <Grid container>
        <Grid xs={12} item>
          <Button
            type="submit"
            variant="contained"
            className={classes.button}
            color="primary"
            fullWidth
          >
            Enviar
          </Button>
        </Grid>
        <Grid xs={12} item >
          <Button 
            variant="contained"
            className={classes.button}
            fullWidth
            onClick={onCloseAction}
          >
            Cancelar
          </Button>
        </Grid>
      </Grid>
    </Form>
  );
}