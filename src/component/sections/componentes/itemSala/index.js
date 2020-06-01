import React, {useState} from 'react';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

import Styles from './styles';

export default function ItemSala(props) {
  const classes = Styles();
  const salas = props.salas;

  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return(<div className={classes.demo}>
    <List>{
      salas.map((s)=>(<>
        <ListItem>
          <ListItemText
              primary={s.nome}
            />
            <ListItemSecondaryAction>
              <IconButton>
                <EditIcon />
              </IconButton>
              <IconButton onClick={handleClickOpen}>
                <DeleteIcon />
              </IconButton>
            </ListItemSecondaryAction>
        </ListItem>
        <Divider/>
      </>))
  }
    </List>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          Tem certeza que deseja excluir a sala?
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
             
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Não
          </Button>
          <Button onClick={handleClose} color="primary" autoFocus>
            Sim
          </Button>
        </DialogActions>
      </Dialog>
  </div>);
}
