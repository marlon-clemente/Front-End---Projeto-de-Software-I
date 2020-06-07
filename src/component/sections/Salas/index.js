import React, { useState, useContext, useEffect } from 'react';
import {Form} from '@unform/web';
import Divider from '@material-ui/core/Divider';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Header from '../componentes/header';
import Input from '../../../component/Form/input';

import InfoZeroSalas from '../componentes/BoxInfo/semSalas';
import ListaSalas from '../componentes/itemSala';
import DataContext from '../../../context/Data';
import api from '../../../services/api';

import Styles from './styles';


function Salas() {
  const { 
    fetchClassrooms,
    classrooms,
    fetchingData,
    token,
    school: { id_hash }
  } = useContext(DataContext);
  
  useEffect(() => {
    if (!classrooms.length)
      fetchClassrooms();
  }, [])

  async function handleForm(data){
    try {
      const response = await api.post(`/schools/${id_hash}/classrooms`, data, {
        headers: {
          "Authorization": `Bearer ${token}`
        }
      })
      if (response.status === 201) {
        fetchClassrooms();
        setFormSala(false);
      }
    } catch (error) {
      console.log(error);
    }
  }
  const classes = Styles();
  const [formSala, setFormSala] = useState(false);

  const handleCancelForm = ()=>{
    setFormSala(false);
  }
  const handleActiveForm = ()=>{
    setFormSala(true);
  }

  return(<div>
      <Header title="Salas" noIcon/>
      <Divider/>
      {
        formSala ? (
          <Paper className={classes.paper} elevation={3}>
            <div className={classes.form}>
              <h4>Adicionar nova sala</h4>
              <Form onSubmit={handleForm}>
                <Input name="identifier" label="Nome da sala" />

                <Button
                  className={classes.button}
                  onClick={handleCancelForm}
                  disableElevation
                  variant="contained"
                  type="submit">Cancelar
                </Button>
                
                <Button
                  className={classes.button}
                  color="primary"
                  variant="contained"
                  type="submit">Salvar
                </Button>
              </Form>
            </div>
          </Paper>
        ) : (
          <div className={classes.sectionBt}>
            <Button
              className={classes.button}
              onClick={handleActiveForm}
              color="primary"
              variant="contained"
              type="submit"
            >
              Adicionar nova sala
            </Button>
          </div>
        )
      }
      {
        fetchingData ? 'Buscando Salas...' : (classrooms.length > 0 ? <ListaSalas salas={classrooms} /> : <InfoZeroSalas/>)
      }
  </div>)
}

export default Salas;