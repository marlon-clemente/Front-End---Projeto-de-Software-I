import React, { useState, useRef, useContext } from 'react';
import moment from 'moment/min/moment-with-locales';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import ListIcon from '@material-ui/icons/List';
import PersonIcon from '@material-ui/icons/Person';
import DeleteIcon from '@material-ui/icons/Delete';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Tooltip from '@material-ui/core/Tooltip';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import NoImg from '../../../../assets/no_img.png';
import ErrorDialog from '../../../../component/DialogModal/Error';
import SuccessDialog from '../../../../component/DialogModal/Success';
import HistoryDialog from '../../../../component/DialogModal/History';
import DataContext from '../../../../context/Data';

moment.locale('pt-br');

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 300,
    width: '100%',
    marginTop: 25
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  }
}));

export default function TicketCard({ ticket }) {
  const classes = useStyles();
  const [expanded, setExpanded] = useState(false);
  const [historyDialogOpen, setHistoryDialogOpen] = useState(false);
  const [error, setError] = useState({});
  const [success, setSuccess] = useState({});
  const [deleteDialog, setDeleteDialog] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const handleClick = () => {
    setHistoryDialogOpen(true);
  };

  const { makeRequest, school: { id_hash: schoolIdHash }} = useContext(DataContext);
  const { id: ticketId, slug: classroomSlug } = ticket

  const handleDelete = () => {
    makeRequest({
      verb: 'delete',
      endpoint: `/schools/${schoolIdHash}/classrooms/${classroomSlug}/tickets/${ticketId}`
    }, (res, error) => {
      if (error)
        setError(error);
      
      setSuccess(res);
    });
  }

  const handleCloseSuccess = () => {
    setDeleteDialog(false);
    setSuccess({});
  }
  
  const ref = useRef();

  return (
    <>
      <Card ref={ref} key={ticket.id} className={classes.root}>
        <CardHeader
          title={ticket.title}
          subheader={`Última atualização: ${moment(ticket.updated_at).calendar()}`}
        />

        <CardMedia
          className={classes.media}
          image={ ticket.photos[0] ? ticket.photos[0]?.url : NoImg}
        />
        
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">
            {ticket.identifier}
          </Typography>
        </CardContent>

        <CardActions disableSpacing>
          <Tooltip title={ticket.owner}>
            <IconButton>
              <PersonIcon />
            </IconButton>
          </Tooltip>
          
          <Tooltip title="Ver histórico de atualizações" onClick={handleClick}>
            <IconButton>
              <ListIcon />
            </IconButton>
          </Tooltip>

          <Tooltip title="Excluir ticket" onClick={() => setDeleteDialog(true)}>
            <IconButton>
              <DeleteIcon />
            </IconButton>
          </Tooltip>

          <Tooltip title="Mostrar mais">
            <IconButton
              className={clsx(classes.expand, {
                  [classes.expandOpen]: expanded,
              })}
              onClick={handleExpandClick}
              aria-expanded={expanded}
              >
              <ExpandMoreIcon/>
            </IconButton>
          </Tooltip>
        </CardActions>

        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <Typography paragraph>
              {ticket.description}
            </Typography>
          </CardContent>
        </Collapse>
      </Card>

      {historyDialogOpen && <HistoryDialog
        open={historyDialogOpen}
        ticket={ticket}
        onClickAction={() => setHistoryDialogOpen(false)}
      />}

      <ErrorDialog error={error} onCloseAction={() => setError({})} />
      <SuccessDialog success={success} onCloseAction={handleCloseSuccess} />

      <Dialog
        open={deleteDialog}
        aria-labelledby="alert-dialog-delete"
        aria-describedby="alert-dialog-delete-description"
      >
        <DialogTitle id="alert-dialog-delete">
          Excluir
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-delete-description">
            Você tem certeza que deseja excluir {ticket.title}?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleDelete}>Excluir</Button>
          <Button onClick={() => setDeleteDialog(false)}>Cancelar</Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
