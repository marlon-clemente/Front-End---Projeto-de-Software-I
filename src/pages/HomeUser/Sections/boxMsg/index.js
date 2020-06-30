import React, { useState } from 'react'
import Styles from './styles';
import List from '@material-ui/core/List';
import ListItemText from '@material-ui/core/ListItemText';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import ImageIcon from '@material-ui/icons/Image';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/InfoOutlined';
import Divider from '@material-ui/core/Divider';
import HistoryDialog from '../../../../component/DialogModal/History';

const TicketItem = ({ ticket }) => {
  const [historyDialogOpen, setHistoryDialogOpen] = useState(false);

  return (
    <>
      <ListItem>
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
          <IconButton title="Ver histórico de atividades" onClick={() => setHistoryDialogOpen(true)}>
            <InfoIcon />
          </IconButton>
        </ListItemSecondaryAction>
      </ListItem>
      <Divider />

      {historyDialogOpen && <HistoryDialog
        open={historyDialogOpen}
        ticket={ticket}
        onClickAction={() => setHistoryDialogOpen(false)}
      />}
    </>
  );
}

export default function BoxMsg({ tickets }) {
  const classes = Styles();

  return (
    <div className={classes.root}>
      <List>
        {tickets.map(ticket => (
          <TicketItem key={ticket.id} ticket={ticket} />
        ))}
      </List>
    </div>
  )
}
