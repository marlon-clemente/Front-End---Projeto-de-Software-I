import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
// import Button from '@material-ui/core/Button';
import Fab from '@material-ui/core/Fab';
import Dialog from '@material-ui/core/Dialog';
import CloseIcon from '@material-ui/icons/Close';
import IconButton from '@material-ui/core/IconButton';
import AddCommentIcon from '@material-ui/icons/AddComment';
import Typography from '@material-ui/core/Typography';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import ListItemText from '@material-ui/core/ListItemText';
import ListItem from '@material-ui/core/ListItem';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import ErrorDialog from '../Error';
import SuccessDialog from '../Success';
import HistoryForm from '../../HistoryForm';

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

export default function History ({ open, ticket, history, onClickAction }) {
  const classes = useStyles();
  const [error, setError] = useState({});
  const [success, setSuccess] = useState({});
  const [openForm, setOpenForm] = useState(false);

  return (
    <>
      <Dialog
        open={open}
        aria-labelledby="history-dialog"
        aria-describedby="history-dialog-description"
        fullScreen
      >
        <AppBar className={classes.appBar}>
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

        <Fab
          color="primary"
          aria-label="add"
          className={classes.addButton}
          onClick={() => setOpenForm(true)}
        >
          <AddCommentIcon />
        </Fab>

        <List>
          {history && history.map(action => (
            <React.Fragment key={action.id}>
              <ListItem button>
                <ListItemText
                  primary="Descrição"
                  secondary={action.description}
                />

                <ListItemText
                  primary="Situação"
                  secondary={
                    <Typography
                      component="span"
                      variant="body2"
                      // className={classes.inline}
                      color="textPrimary"
                    >
                      {action.situation}
                    </Typography>
                  }
                />
              </ListItem>
              <Divider />
            </React.Fragment>
          ))}
        </List>
      </Dialog>
      
      <ErrorDialog error={error} onCloseAction={() => setError({})} />
      <SuccessDialog success={success} onCloseAction={() => setSuccess({})} />

      <Dialog
        open={openForm}
        aria-labelledby="alert-dialog-form"
        aria-describedby="alert-dialog-form-description"
      >
        <DialogTitle id="alert-dialog-form">Adicionar nova atividade</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-form-description">
            {ticket.title}
          </DialogContentText>
          <HistoryForm
            ticketId={ticket.id}
            classroomSlug={ticket.slug}
            handleError={setError}
            handleResponse={setSuccess}
            onCloseAction={() => setOpenForm(false)}
          />
        </DialogContent>
      </Dialog>
    </>
  )
}