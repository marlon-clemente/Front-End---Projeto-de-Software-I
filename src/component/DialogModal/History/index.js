import React, { useState, useEffect, useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import Dialog from '@material-ui/core/Dialog';
import CloseIcon from '@material-ui/icons/Close';
import DeleteIcon from '@material-ui/icons/Delete';
import IconButton from '@material-ui/core/IconButton';
import AddCommentIcon from '@material-ui/icons/AddComment';
import Typography from '@material-ui/core/Typography';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import Divider from '@material-ui/core/Divider';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import ErrorDialog from '../Error';
import SuccessDialog from '../Success';
import HistoryForm from '../../HistoryForm';
import DataContext from '../../../context/Data';

const useStyles = makeStyles((theme) => ({
  appBar: {
    position: 'relative',
    width: '100%',
  },
  addButton: {
    position: 'absolute',
    bottom: theme.spacing(2),
    right: theme.spacing(2),
  },
}));

export default function History ({ open, ticket, onClickAction }) {
  const classes = useStyles();
  const [error, setError] = useState({});
  const [success, setSuccess] = useState({});
  const [openForm, setOpenForm] = useState(false);
  const [activityInfo, setActivityInfo] = useState({});
  const [history, setHistory] = useState([]);
  const [formTitle, setFormTitle] = useState('Adicionar nova atividade');

  const { makeRequest, school: { id_hash: schoolIdHash }, isAdmin } = useContext(DataContext);

  const ticketId = ticket.id;
  let classroomSlug = null;
  if (isAdmin) {
    classroomSlug = ticket.slug;
  } else {
    classroomSlug = ticket.classroom.slug;
  }

  useEffect(() => {
    makeRequest({
      endpoint: `/schools/${schoolIdHash}/classrooms/${classroomSlug}/tickets/${ticketId}/history/`
    }, (res, error) => {
      if (error) {
        setError(error);
        return;
      }
      
      setHistory(res.data);
    });
  }, [])

  const handleActionClick = (action) => {
    setActivityInfo(action);
    setFormTitle('Editar atividade')
    setOpenForm(true);
  }

  const handleCloseForm = () => {
    setOpenForm(false);
    setActivityInfo({});
    setFormTitle('Adicionar nova atividade');
  }

  const handleDelete = (actionId) => {
    makeRequest({
      verb: 'delete',
      endpoint: `/schools/${schoolIdHash}/classrooms/${classroomSlug}/tickets/${ticketId}/history/${actionId}`
    }, (res, error) => {
      if (error)
        setError(error);
      
      setSuccess(res);
    });
  }

  return (
    <>
      <Dialog
        open={open}
        aria-labelledby="history-dialog"
        aria-describedby="history-dialog-description"
        fullScreen
      >
        <AppBar className={classes.appBar} color={isAdmin ? 'primary': 'secondary'}>
          <Toolbar>
            <IconButton edge="start" color="inherit" onClick={onClickAction} aria-label="close">
              <CloseIcon />
            </IconButton>
            <Typography
              variant="h6"
              component="h6"
            >{ticket.title}</Typography>
          </Toolbar>
        </AppBar>

        {isAdmin && <Fab
          color="primary"
          aria-label="add"
          className={classes.addButton}
          onClick={() => setOpenForm(true)}
        >
          <AddCommentIcon />
        </Fab>}

        <List>
          {history && history.map(action => (
            <React.Fragment key={action.id}>
              <ListItem
                button
                onClick={() => handleActionClick(action)}
              >
                <ListItemText
                  primary={action.description}
                  secondary={action.situation}
                />
                {isAdmin && <ListItemSecondaryAction>
                  <IconButton edge="end" aria-label="delete" onClick={() => handleDelete(action.id)}>
                    <DeleteIcon />
                  </IconButton>
                </ListItemSecondaryAction>}
              </ListItem>
              <Divider />
            </React.Fragment>
          ))}
        </List>
      </Dialog>
      
      <ErrorDialog error={error} onCloseAction={() => setError({})} />
      <SuccessDialog success={success} onCloseAction={() => setSuccess({})} />

      {isAdmin && <Dialog
        open={openForm}
        aria-labelledby="alert-dialog-form"
        aria-describedby="alert-dialog-form-description"
        fullWidth
        maxWidth = {'md'}
      >
        <DialogTitle id="alert-dialog-form">{formTitle}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-form-description">
            {ticket.title}
          </DialogContentText>
          <HistoryForm
            activityInfo={activityInfo}
            ticketId={ticket.id}
            classroomSlug={ticket.slug}
            handleError={setError}
            handleResponse={setSuccess}
            onCloseAction={handleCloseForm}
          />
        </DialogContent>
      </Dialog>}
    </>
  )
}