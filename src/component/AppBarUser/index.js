import React, { useContext, useState, useEffect } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Avatar from '@material-ui/core/Avatar';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

import DataContext from '../../context/Data';
import Styles from './styles';

export default function MenuAppBar() {
  const classes = Styles();
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const [openSchool, setOpenSchool] = useState(false);
  const [response, setResponse] = useState({});
  const {
    loggedUser,
    handleLogout,
    picture,
    subscribeUserToSchool,
    getAuthUserSchool,
    school
  } = useContext(DataContext);

  useEffect(() => {
    getAuthUserSchool((res, error) => {
      if (error)
        setResponse({ type: 'error', error});
    });
  }, [])

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleClick = () => {
    subscribeUserToSchool(({ data: { message } }, error) => {
      if (error) {
        setResponse({ type: 'error', error});
      } else {
        setResponse({ type: 'success', message })
      }
      setOpenSchool(false);
    });
  }

  return (
    <div className={classes.root}>
      <meta name="theme-color" content="#2A3261"/>
      <AppBar color="secondary" position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            Olá, {loggedUser.username}
          </Typography>

          <Typography variant="h6" className={classes.title}>
            { Object.keys(school).length ? `${school.social_reason}(${school.id_hash})` : (
              <Button 
                onClick={() => setOpenSchool(true)}
                style={{
                  color: "white"
                }}
              >Escolher uma escola</Button>
            ) }
          </Typography>

          <div>
            <IconButton
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleMenu}
              color="inherit"
            >
              <Avatar src={picture} className={classes.avatar}>MC</Avatar>
            </IconButton>

            <Menu
              id="menu-appbar"
              anchorEl={anchorEl}
              anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
              }}
              open={open}
              onClose={handleClose}
            >
              <MenuItem onClick={handleLogout}>Sair</MenuItem>
            </Menu>
          </div>
        </Toolbar>
      </AppBar>

      <Dialog
        open={openSchool}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          Digite o código identificador da sua escola!
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            O diretor da sua escola poderá fornecer esse código para você!
            <TextField
              autoFocus
              margin="dense"
              id="schoolIdHash"
              label="Código identificador"
              type="number"
              fullWidth
              color="secondary"
            />
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button 
            color="secondary"
            onClick={() => setOpenSchool(false)}
          >
            Fechar
          </Button>
          <Button
            color="secondary"
            autoFocus
            onClick={handleClick}
          >
            Enviar
          </Button>
        </DialogActions>
      </Dialog>

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
            onClick={() => setResponse({})}
          >
            Fechar
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
