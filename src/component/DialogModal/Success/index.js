import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

export default function SuccessDialog({ success, onCloseAction }) {
  return (
    <Dialog
      open={success.status}
      aria-labelledby="alert-dialog-Success"
      aria-describedby="alert-dialog-Success-description"
    >
      <DialogTitle id="alert-dialog-Success">
        Atualizações salvas com sucesso!
      </DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-Success-description" />
      </DialogContent>
      <DialogActions>
        <Button onClick={() => onCloseAction()}>Fechar</Button>
      </DialogActions>
    </Dialog>
  ); 
}