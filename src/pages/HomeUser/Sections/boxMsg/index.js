import React from 'react'
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

export default function BoxMsg({ tickets }) {
  const classes = Styles();
  return (
    <div className={classes.root}>
      <List>
        {tickets.map(ticket => (
          <ListItem key={ticket.id} style={{ borderBottom: '1px solid lightgrey' }}>
            <ListItemAvatar>
              <Avatar>
                <ImageIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary={ticket.title} secondary={ticket.description} />
            <ListItemSecondaryAction>
              <IconButton onClick={() => console.log('info')}>
                <InfoIcon />
              </IconButton>
            </ListItemSecondaryAction>
          </ListItem>
        ))}
      </List>
    </div>
  )
}
