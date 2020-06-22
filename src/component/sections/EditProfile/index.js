import React, {useState, useContext, useCallback, useRef} from 'react';
import {Form} from '@unform/web';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';
import Avatar from '@material-ui/core/Avatar';
import Divider from '@material-ui/core/Divider';
import Header from '../componentes/header';
import Alert from '@material-ui/lab/Alert';

import ReactCrop from 'react-image-crop';
import 'react-image-crop/dist/ReactCrop.css';

import Styles from './styles';
import Input from '../../../component/Form/input';
import loginApp from '../../../firebase';
import { useSections } from '../../../context/Sections';
import DataContext from '../../../context/Data';


export default function EditProfile() {
  const classes = Styles();
  const { loggedUser, school } = useContext(DataContext);
  const [alert, setAlert] = useState((<></>));
  const { setCurrentSections} = useSections();

  function handleCancel(){
    setCurrentSections('conta');
  }

  return (
    <div>
      <Header title="Alterar perfil escolar" returnTo="conta" />
      <Divider/>
       <Form initialData={ school }>
        
        <Input name="social_reason" label="Razão Social"/>
        <Input name="address.street" label="Endereço"/>
        <Input name="address.number" label="Número"/>
        <Button
          variant="contained"
          color="primary"
          onClick={handleCancel}
          className={classes.button}
          >Cancelar</Button>
        <Button
          variant="contained"
          type="submit"
          color="primary"
          className={classes.button}
          >Salvar alterações</Button>
      </Form>
      { alert }
      <Divider />
    </div>
  )
}
