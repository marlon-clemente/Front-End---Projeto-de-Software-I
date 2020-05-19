import React, {useState, useCallback, useRef} from 'react';
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


export default function EditProfile() {
  const classes = Styles();
  const userApp = loginApp.auth().currentUser;
  const [alert, setAlert] = useState((<></>));
  const { setCurrentSections} = useSections();

  const [upImg, setUpImg] = useState();
  const imgRef = useRef(null);
  const [crop, setCrop] = useState({ unit: '%', width: 30, aspect: 128 / 128 });
  const [previewUrl, setPreviewUrl] = useState();
  const [controlCrop, setControlCrop] = useState(false);

  function handleUpdateUser(data){
    console.log(data)
    // userApp
    // .updateProfile({
    //   displayName: data.name
    // })
    // .then(()=>{
    //   setAlert(
    //     <Alert 
    //       severity="success">
    //       Seu perfil de usuário foi alterado com sucesso!
    //     </Alert>
    //   )
    // })
    // .catch((error) => {
    //   setAlert(
    //     <Alert 
    //       severity="error">
    //       {error}
    //     </Alert>
    //   )
    // })
  }

  function handleCancel(){
    setCurrentSections('conta');
  }
  function handleCancelCrop(){
    setControlCrop(false);
  }

  const onSelectFile = e => {
    if (e.target.files && e.target.files.length > 0) {
      const reader = new FileReader();
      reader.addEventListener('load', () => setUpImg(reader.result));
      reader.readAsDataURL(e.target.files[0]);
      setControlCrop(true);
    }
  };

  const onLoad = useCallback(img => {
    imgRef.current = img;
  }, []);

  const makeClientCrop = async crop => {
    if (imgRef.current && crop.width && crop.height) {
      createCropPreview(imgRef.current, crop, 'newFile.jpeg');
    }
  };

  const createCropPreview = async (image, crop, fileName) => {
    const canvas = document.createElement('canvas');
    const scaleX = image.naturalWidth / image.width;
    const scaleY = image.naturalHeight / image.height;
    canvas.width = crop.width;
    canvas.height = crop.height;
    const ctx = canvas.getContext('2d');

    ctx.drawImage(
      image,
      crop.x * scaleX,
      crop.y * scaleY,
      crop.width * scaleX,
      crop.height * scaleY,
      0,
      0,
      crop.width,
      crop.height
    );

    return new Promise((resolve, reject) => {
      canvas.toBlob(blob => {
        if (!blob) {
          reject(new Error('Canvas is empty'));
          return;
        }
        blob.name = fileName;
        window.URL.revokeObjectURL(previewUrl);
        setPreviewUrl(window.URL.createObjectURL(blob));
      }, 'image/jpeg');
    });
  };

  return (
    <div>
      <Header title="Alterar perfil escolar" returnTo="conta" />
      <Divider/>
      <Form onSubmit={handleUpdateUser}>
        <input accept="image/*" className={classes.inputImage}
        id="icon-button-file" type="file" onChange={onSelectFile} />
        { previewUrl && <Avatar className={classes.avatar}
          alt="Crop preview" src={previewUrl} />}
        {
          !controlCrop ? (<>
            <Avatar className={classes.avatar}
              alt="Crop preview">
            </Avatar>
            <Link color="primary">
              <label htmlFor="icon-button-file">
                Adicionar imagem</label>
            </Link></>
          ) : (
            <div>
              <label>Por favor, ajuste a imagem:</label>
              <ReactCrop
                src={upImg}
                onImageLoaded={onLoad}
                crop={crop}
                onChange={c => setCrop(c)}
                onComplete={makeClientCrop}
              />
              <Button
                variant="contained"
                color="primary"
                onClick={handleCancelCrop}
                className={classes.button}
              >Definir imagem</Button>
            </div>
          )
        }
        
        
        <Input name="name" label="Nome da escola"/>
        <Input name="social" label="Razão Social"/>
        <Input name="city" label="Cidade"/>
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
