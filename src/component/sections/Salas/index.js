import React, {useState} from 'react';
import {Form} from '@unform/web';
import Divider from '@material-ui/core/Divider';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Header from '../componentes/header';
import Input from '../../../component/Form/input';

import InfoZeroSalas from '../componentes/BoxInfo/semSalas';
import ListaSalas from '../componentes/itemSala';

import Styles from './styles';

import temp from '../../../temp/sala'

var sala = temp;

function Salas() {
  function handleForm(data){
    console.log(data);
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
            {console.log(sala)}
            <Form onSubmit={handleForm}>
              <Input name="sala" label="Nome da sala" />

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
          </div></Paper>
        ) : (
          <div className={classes.sectionBt}>
            <Button
              className={classes.button}
              onClick={handleActiveForm}
              color="primary"
              variant="contained"
              type="submit">Adicionar nova sala
            </Button>
          </div>
        )
      }
      {
        sala.length > 0 ? (<ListaSalas salas={sala} />):(<InfoZeroSalas/>)
      }
  </div>)
}

export default Salas;