import React from 'react';
import Grid from '@material-ui/core/Grid';
import TicketCard from '../TicketCard';

export default function CardList({ tickets }) {
  return (
    <Grid
      container
      direction="row"
      justify="flex-start"
      alignItems="flex-start"
      justify="space-evenly"
      xs
      style={{ flexGrow: 1 }}
    >
      { tickets.map(ticket => <TicketCard key={ticket.id} ticket={ticket} />)}
    </Grid>
  );
}