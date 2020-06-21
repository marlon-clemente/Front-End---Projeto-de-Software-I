import React, { useState, useContext } from 'react'
import Styles from './styles';
import DataContext from '../../../../context/Data';

import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItemText from '@material-ui/core/ListItemText';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import ImageIcon from '@material-ui/icons/Image';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/InfoOutlined';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';
import Dialog from '@material-ui/core/Dialog';
import Divider from '@material-ui/core/Divider';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

const useStyles = makeStyles((theme) => ({
  appBar: {
    position: 'relative',
  },
  title: {
    marginLeft: theme.spacing(2),
    flex: 1,
  },
}));

const HistoryDialog = ({ title, history, historyDialogOpen, setHistoryDialogOpen }) => {
  const classes = useStyles();

  return (
    <Dialog
      open={historyDialogOpen}
      aria-labelledby="history-dialog"
      aria-describedby="history-dialog-description"
      fullScreen
    >
      <AppBar color="secondary" className={classes.appBar}>
        <Toolbar>
          <IconButton edge="start" color="inherit" onClick={() => setHistoryDialogOpen(false)} aria-label="close">
            <CloseIcon />
          </IconButton>
          {title}
        </Toolbar>
      </AppBar>
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
                    className={classes.inline}
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
  );
}

export default function BoxMsg({ tickets }) {
  const classes = Styles();
  const [currentTicket, setCurrentTicket] = useState({});
  const [ticketHistory, setTicketHistory] = useState([]);
  const [historyDialogOpen, setHistoryDialogOpen] = useState(false);
  const [error, setError] = useState({});

  const { fetchTicketHistory } = useContext(DataContext);
  
  const handleClick = (ticketId, classroomSlug) => {
    setCurrentTicket(tickets.find(ticket => ticket.id === ticketId));
    // fetchTicketHistory({ ticketId, classroomSlug }, ({ data }, error) => {
    //   if (error)
    //     setError(error);
      
    //   setTicketHistory(data);
    // });
    
    setHistoryDialogOpen(true);
  };

  return (
    <div className={classes.root}>
      <List>
        {tickets.map(ticket => (
          <ListItem key={ticket.id} style={{ borderBottom: '1px solid lightgrey' }}>
            <ListItemAvatar>
              { ticket.photos[0] ? (
                <Avatar
                  alt={ticket.photos[0].path}
                  src={ticket.photos[0].url}
                />
              ) : (
                <Avatar>
                  <ImageIcon />
                </Avatar>
              )}
            </ListItemAvatar>
            <ListItemText primary={ticket.title} secondary={ticket.description} />
            <ListItemSecondaryAction>
              <IconButton onClick={() => handleClick(ticket.id, ticket.classroom_id)}>
                <InfoIcon />
              </IconButton>
            </ListItemSecondaryAction>
          </ListItem>
        ))}
      </List>

      <HistoryDialog
        title={currentTicket.title}
        history={ticketHistory}
        historyDialogOpen={historyDialogOpen}
        setHistoryDialogOpen={setHistoryDialogOpen}
      />
    </div>
  )
}
