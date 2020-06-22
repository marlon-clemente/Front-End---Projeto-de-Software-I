import React, {useContext, useRef, useState} from 'react';
import Styles from './styles';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import IconButton from '@material-ui/core/IconButton';
import Menu from '../../../component/Menu2';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import EmailIcon from '@material-ui/icons/Email';
import PersonIcon from '@material-ui/icons/Person';
import EditIcon from '@material-ui/icons/Edit';
import LockIcon from '@material-ui/icons/Lock';
import DataContext from '../../../context/Data';

import BoxEditUsername from './alterUserName'
import BoxEditEmail from './alterEmail'
import BoxEditPassword from './alterPassword';

export default function ConfigUser() {
  const classes = Styles();
  const { loggedUser } = useContext(DataContext);
  const [BoxEdit, setBoxEdit] = useState(0)

  const handleButtonEditUsername = () =>{
    setBoxEdit(1)
  }
  const handleButtonEditEmail = () =>{
    setBoxEdit(2)
  }
  const handleButtonEditPassword = ()=>{
    setBoxEdit(3)
  }
  const handleButtonClose = () => {
    setBoxEdit(0)
  }

  const CancelButton = (<Button color="primary" onClick={handleButtonClose}>Cancelar</Button>)

  return (
    <div className={classes.root}>
      <Menu title="Configuração de Usuário e Segurança"/>
      <div className={classes.content}>
      <Typography variant="h5" component="h1" className={classes.title}>
        Configuração de Usuário e Segurança
        <Divider />
      </Typography>
      
      <Grid container >
        <Grid item xl={6} lg={6} md={12} sm={12} xs={12}>
        <List dense={false} className={classes.list}>
          <ListItem>
            <ListItemIcon><PersonIcon/></ListItemIcon>
            <ListItemText primary="Nome de usuário"
              secondary={loggedUser.username}/>
              {BoxEdit!==1 && (
                <IconButton edge="end" onClick={handleButtonEditUsername}>
                  <EditIcon />
                </IconButton>)}
          </ListItem>
          <ListItem>
            <ListItemIcon><EmailIcon/></ListItemIcon>
            <ListItemText primary="E-mail de acesso"
              secondary={loggedUser.email}/>
              {BoxEdit!==2 &&(
              <IconButton edge="end" aria-label="Editar" onClick={handleButtonEditEmail}>
                <EditIcon />
              </IconButton>)}
          </ListItem>
          <ListItem>
            <ListItemIcon><LockIcon/></ListItemIcon>
            <ListItemText primary="Senha"/>
            {BoxEdit!==3 &&(
            <IconButton edge="end" aria-label="Editar" onClick={handleButtonEditPassword}>
              <EditIcon />
            </IconButton>)}
          </ListItem>
        </List>

      </Grid>
      <Grid item xl={6} lg={6} md={12} sm={12} xs={12}>
        { BoxEdit===1 && (
          <Paper elevation={3} className={classes.paper}>
            <BoxEditUsername/>
            {CancelButton}
          </Paper>)}
        { BoxEdit===2 && (
          <Paper elevation={3} className={classes.paper}>
            <BoxEditEmail/>
            {CancelButton}
          </Paper>)}
        { BoxEdit===3 && (
          <Paper elevation={3} className={classes.paper}>
            <BoxEditPassword/>
            {CancelButton}
          </Paper>)}
      </Grid>
      </Grid>
    </div></div>
  )
}