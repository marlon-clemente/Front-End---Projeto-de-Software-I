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
import { AuthContext } from '../../../context/Auth';


export default function EditProfile() {
  const classes = Styles();
  const {currentUser} = useContext(AuthContext);
  const userApp = loginApp.auth().currentUser;
  const [alert, setAlert] = useState((<></>));
  const { setCurrentSections} = useSections();

  const imgRef = useRef(null);
  const [crop, setCrop] = useState({ unit: '%', width: 30, aspect: 128 / 128 });
  const [previewUrl, setPreviewUrl] = useState();
  const [upImg, setUpImg] = useState();
  const [controlCrop, setControlCrop] = useState(false);

  var getFileBlob = function (url, cb) {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", url);
    xhr.responseType = "blob";
    xhr.addEventListener('load', function() {
      cb(xhr.response);
    });
    xhr.send();
  };

  async function handleUpdateUser(data){
    await getFileBlob(previewUrl, blob =>{
      loginApp.storage().ref().child("profileImage/"+data.name+"/avatar.jpg")
      .put(blob).then(function(snapshot) {
        console.log("Imagem carregada com suceso.");
        snapshot.ref.getDownloadURL().then(function(downloadURL) {
          console.log('Você pode encontrar o arquivo em: ',downloadURL);
          data.urlImg = downloadURL;
        })
      })
    })

    const update = {
      displayName: data.name,
      photoURL: data.urlImg
    }
    await userApp.updateProfile(update)
    .then(()=>{
      setAlert(
        <Alert 
          severity="success">
          Seu perfil de usuário foi alterado com sucesso!
        </Alert>
      )
    })
    .catch((error) => {
      setAlert(
        <Alert 
          severity="error">
          {error}
        </Alert>
      )
    })
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

  const initialData ={
    name: currentUser.displayName
  }

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
          console.error("Canvas is empty...")
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
       <Form initialData={initialData} onSubmit={handleUpdateUser}>
        <input accept="image/*" className={classes.inputImage}
        id="icon-button-file" name="photo" type="file" onChange={onSelectFile}/>
        
        { previewUrl && <Avatar className={classes.avatar}
          alt="Crop preview" src={previewUrl} />}
        {
          !controlCrop ? (
            <Link color="primary">
              <label htmlFor="icon-button-file">
                Adicionar imagem</label>
            </Link>
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
              <Button
                variant="contained"
                color="primary"
                onClick={handleCancelCrop}
                className={classes.button}
              >Cancelar</Button>
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
