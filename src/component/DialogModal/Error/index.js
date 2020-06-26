import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';


export default function ErrorDialog({ error, onCloseAction }) {
  return (
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
        <Button onClick={onCloseAction}>Fechar</Button>
      </DialogActions>
    </Dialog>
  ); 
}