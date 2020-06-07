import React, {useState, useContext} from 'react';
import List from '@material-ui/core/List';
import ListItemText from '@material-ui/core/ListItemText';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import ImageIcon from '@material-ui/icons/Image';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import InfoIcon from '@material-ui/icons/InfoOutlined'
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

import Styles from './styles';
import api from '../../../../services/api';
import DataContext from '../../../../context/Data';

export default function ItemSala(props) {
  const classes = Styles();
  const salas = props.salas;

  const [targetClassroom, setTargetClassroom] = useState({});
  const [error, setError] = useState({});
  const [success, setSuccess] = useState({ status: false, message: '' });
  const [open, setOpen] = useState(false);
  const [openInfo, setOpenInfo] = useState(false);
  const [tickets, setTickets] = useState([]);
  const {
    school: { id_hash },
    token,
    fetchClassrooms,
    fetchTicketsPerClassroom
  } = useContext(DataContext);

  const handleClickOpen = (sala, action) => {
    setTargetClassroom(sala);
    if (action === 'delete')
      setOpen(true);
    else {
      setOpenInfo(true);
      fetchTicketsPerClassroom(sala.slug, ({ data }, error) => {
        if (error)
          setError(error);
        else {
          setTickets(data);
        }
      });
    }
  };

  const handleDelete = async () => {
    try {
      await api.delete(`/schools/${id_hash}/classrooms/${targetClassroom.slug}`, {
        headers: {
          "Authorization": `Bearer ${token}`
        }
      })
      setSuccess({ status: true, message: `Sala ${targetClassroom.identifier} removida com sucesso!` });
    } catch (error) {
      setError(error);
    }
    setOpen(false);
  }

  return(
    <div className={classes.demo}>
      <List>
        { 
          salas.map((s)=>(
            <ListItem key={s.slug} style={{ borderBottom: '1px solid lightgrey' }}>
              <ListItemText primary={s.identifier} />
                <ListItemSecondaryAction>
                  <IconButton onClick={() => handleClickOpen(s, 'info')}>
                    <InfoIcon />
                  </IconButton>
                  <IconButton onClick={() => handleClickOpen(s, 'delete')}>
                    <DeleteIcon />
                  </IconButton>
                </ListItemSecondaryAction>
            </ListItem>
          )) 
        }
      </List>
      <Dialog
        open={open}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          Tem certeza que deseja excluir <b>{targetClassroom.identifier}</b>?
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description" />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpen(false)} color="primary">
            Não
          </Button>
          <Button onClick={handleDelete} color="primary" autoFocus>
            Sim
          </Button>
        </DialogActions>
      </Dialog>

      <Dialog
        open={Object.keys(error).length ? true : false}
        aria-labelledby="alert-dialog-error"
        aria-describedby="alert-dialog-error-description"
      >
        <DialogTitle id="alert-dialog-error">
          {error.name}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-error-description">
            {error.message}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setError({})}>
            Fechar
          </Button>
        </DialogActions>
      </Dialog>

      <Dialog
        open={openInfo}
        aria-labelledby="alert-dialog-update"
        aria-describedby="alert-dialog-update-description"
        fullWidth
      >
        <DialogTitle id="alert-dialog-update">
          {targetClassroom.identifier}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-update-description">
            {tickets.length ? (
              <>
                {`Patrimônios com problemas:`}
                <List dense={true}>
                  { 
                    tickets.map((ticket)=>(
                      <ListItem key={ticket.id} style={{ borderBottom: '1px solid lightgrey' }}>
                        <ListItemAvatar>
                          <Avatar>
                            <ImageIcon />
                          </Avatar>
                        </ListItemAvatar>
                        <ListItemText primary={ticket.title} secondary={ticket.description} />
                          <ListItemSecondaryAction>
                            <IconButton onClick={() => console.log('deleta')}>
                              <DeleteIcon />
                            </IconButton>
                          </ListItemSecondaryAction>
                      </ListItem>
                    )) 
                  }
                </List>
              </>
            ) : `Buscando informações para a sala ${targetClassroom.identifier}...`}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => {
            setOpenInfo(false);
            setTimeout(() => {
              setTickets([]);
            }, 500);
          }}
          >
            Fechar
          </Button>
        </DialogActions>
      </Dialog>

      <Dialog
        open={success.status}
        aria-labelledby="alert-dialog-Success"
        aria-describedby="alert-dialog-Success-description"
      >
        <DialogTitle id="alert-dialog-Success">
          {success.message}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-Success-description" />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => fetchClassrooms()}>
            <font color="crimson">Fechar</font>
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
