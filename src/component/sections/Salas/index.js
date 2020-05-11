import React, {useState} from 'react';
import {Form} from '@unform/web';
import Divider from '@material-ui/core/Divider'
import Button from '@material-ui/core/Button'
import Header from '../componentes/header';
import Input from '../../../component/Form/input';

import Styles from './styles';

var sala = 0;

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
          <div className={classes.form}>
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
            <Divider />
          </div>
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
        sala > 0 ?(
          <div><p>Com sala</p></div>
        ):(
          <div><h3>Não há salas</h3></div>
        )
      }
  </div>)
}

export default Salas;