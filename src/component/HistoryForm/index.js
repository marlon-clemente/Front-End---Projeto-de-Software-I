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

export default function HistoryForm({ handleError, handleResponse, onCloseAction, classroomSlug, ticketId }) {
  const classes = useStyles();
  const situations = [
    'Aguardando aceitação',
    'Aceito pela diretoria',
    'Encaminhado para conserto',
    'Encerrado'
  ];
  const { makeRequest, school: { id_hash: schoolIdHash} } = useContext(DataContext);
  
  const handleSubmit = ({ situation, description }) => {
    makeRequest({
      verb: 'post',
      body: { situation, description },
      endpoint: `/schools/${schoolIdHash}/classrooms/${classroomSlug}/tickets/${ticketId}/history`
    }, (res, error) => {
      if (error)
        handleError(error);
      
      handleResponse(res);
      onCloseAction();
    });
  }

  return (
    <Form onSubmit={handleSubmit}> 
      <Autocomplete options={ situations }
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