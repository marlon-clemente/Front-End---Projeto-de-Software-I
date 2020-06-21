import React from 'react';
import Grid from '@material-ui/core/Grid';
import TicketCard from '../TicketCard';

export default function CardList({ tickets }) {
  return (
    <Grid 
      container
      justify="space-evenly"
      item
      xs
      style={{ flexGrow: 1 }}
    >
      { tickets.map(ticket => <TicketCard key={ticket.id} ticket={ticket} />)}
    </Grid>
  );
}
