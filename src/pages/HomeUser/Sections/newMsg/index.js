import React, { useContext, useEffect, useState, useRef, useCallback } from 'react'
import { Form } from '@unform/web';
import Grid from '@material-ui/core/Grid';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Styles from './styles';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Autocomplete from '@material-ui/lab/Autocomplete';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Title from '../../componentes/titleForm';
import Input from '../../../../component/HistoryForm/input';
import AddAPhotoIcon from '@material-ui/icons/AddAPhoto';
import 'react-image-crop/dist/ReactCrop.css';

import { useSections } from '../../../../context/Sections';
import DataContext from '../../../../context/Data';

export default function NewMsg() {
  const classes = Styles();
  const imgRef = useRef(null);
  const [confirmForm, setConfirmForm] = useState(false);
  const [photo, setPhoto] = useState(null);
  const [preview, setPreview] = useState()
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

  const handleVoltar = () => setCurrentSections("voltar");
  const handleSelect = () => setConfirmForm(!confirmForm)

  function handleSubmit({ title, classroom, description }){
    handleSaveTicket({ title, classroom, description, photo }, ({ message }, error) => {
      if (error) {
        setResponse({ type: 'error', error });
      } else {
        setResponse({ type: 'success', message });
      }
    })
  }

  const onSelectFile = e => {
    if (e.target.files && e.target.files.length > 0) {
      setPhoto(e.target.files[0]);
      setPreview(URL.createObjectURL(e.target.files[0]))
    }
  };

  const onLoad = useCallback(img => {
    imgRef.current = img;
  }, []);

  return (
    <div className={classes.layout}><Paper className={classes.paper}><Title/>
      <Form className={classes.form} onSubmit={handleSubmit}> 
        <input 
          accept="image/*"
          id="icon-button-file"
          className={classes.inputNone}
          name="photo"
          type="file"
          onChange={onSelectFile}
        />
        <div className={classes.imgBox}>
          {
            !preview ? (
              <label htmlFor="icon-button-file">
                <div className={classes.inputImg}>
                <Box textAlign="center" fontSize={16}>
                  <AddAPhotoIcon className={classes.icon}/>
                  <Typography>ADICIONAR FOTOGRAFIA</Typography>
                </Box>
                </div>
              </label>
            ) : (
              <img className={classes.imgPrewiew} src={preview} alt=""/>
            )
          }
        </div> 
        
        { preview ? (<label className={classes.label} htmlFor="icon-button-file">Alterar fotografia</label>) : (<></>) }
          
        <Input name="title"
          color="secondary" label="Identificação"
          helperText="Nome do objeto | Código do patrimonio escolar"/>
        
        <Autocomplete options={ classrooms }
          getOptionLabel={(option) => option.identifier}
          renderInput={(params) => (
            <Input 
              {...params}
              name="classroom"
              label={ fetchingData ? 'Buscando salas...' : 'Selecione uma sala' }
              color="secondary"
            />
          )}
        />
        
        <Input
          name="description"
          helperText=" "
          color="secondary"
          multiline
          label="Descrição completa da situação"
        />

        <FormControlLabel 
          className={classes.checkedBox}
          control={
            <Checkbox
              color="secondary"
              onClick={handleSelect}
              name="state"
              onChange={event => setAgreement(event.target.checked)}
            />
          }
          label="Você concorda em enviar essas informações? Lembre-se que você está sendo identificado e não é possivel voltar atrás."
        />

        <Grid container>
          {/* grid buttons */}
          <Grid xs={12} item>
            <Button
              type="submit"
              variant="contained"
              className={classes.button_e}
              color="secondary"
              disabled={ !confirmForm ? true : false }
              fullWidth
            >
              Enviar
            </Button>
          </Grid>
          <Grid xs={12} item >
            <Button 
              variant="contained"
              className={classes.button_c}
              fullWidth
              onClick={handleVoltar}
            >
              Cancelar
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
