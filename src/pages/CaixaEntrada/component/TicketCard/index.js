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
import CloseIcon from '@material-ui/icons/Close';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Tooltip from '@material-ui/core/Tooltip';
import Dialog from '@material-ui/core/Dialog';
import ListItemText from '@material-ui/core/ListItemText';
import ListItem from '@material-ui/core/ListItem';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import NoImg from '../../../../assets/no_img.png';
import ErrorDialog from '../../../../component/DialogModal/Error';
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
  const [ticketHistory, setTicketHistory] = useState([]);

  const { fetchTicketHistory } = useContext(DataContext);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const handleClick = () => {
    fetchTicketHistory({ ticketId: ticket.id, classroomSlug: ticket.slug }, ({ data }, error) => {
      if (error)
        setError(error);
      
      setTicketHistory(data);
    });
    
    setHistoryDialogOpen(true);
  };
  
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

      <HistoryDialog
        open={historyDialogOpen}
        ticket={ticket}
        history={ticketHistory}
        onClickAction={() => setHistoryDialogOpen(false)}
      />

      <ErrorDialog error={error} onCloseAction={() => setError({})} />
    </>
  );
}
