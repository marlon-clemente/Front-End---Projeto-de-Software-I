import React, { useContext, useEffect, useState } from 'react';
import moment from 'moment';
import Menu from '../../component/Menu2';
import Styles from '../../styles';
import BoxInfoNoMsg from '../../component/BoxInfo/Default';

import CardList from './component/CardList';
import DataContext from '../../context/Data';
import { TextField } from '@material-ui/core';
import Divider from '@material-ui/core/Divider';

export default function CaixaEntrada() {
  const classes = Styles();
  const { tickets, fetchTickets } = useContext(DataContext);
  const [title, setTitle] = useState('');
  const [startDate, setStartDate] = useState(moment().subtract(1, 'month').format('YYYY-MM-DD'));
  const [finishDate, setFinishDate] = useState(moment().add(1, 'day').format('YYYY-MM-DD'));

  const getTickets = async() => {
    await fetchTickets({
      title,
      startDate,
      finishDate
    }, (res, error) => {
      if (error)
        console.log(error);
      else
        console.log(res);
    });
  }

  useEffect(() => {
    getTickets();
  }, [title, startDate, finishDate]);
  
  return (
    <div className={classes.root}>
      <Menu title="Caixa de Entrada" />
      <div  className={classes.content}>
        <div style={{
          display: 'flex',
          justifyContent: 'flex-start',
          margin: 25
        }}>
          <TextField 
            label="Pesquisar"
            type="search"
            value={title}
            onChange={event => setTitle(event.target.value)}
          />
          <TextField
            label="Início"
            type="date"
            defaultValue={startDate}
            InputLabelProps={{
              shrink: true,
            }}
            onChange={event => setStartDate(event.target.value)}
          />
          <TextField
            label="Fim"
            type="date"
            defaultValue={finishDate}
            InputLabelProps={{
              shrink: true,
            }}
            onChange={event => setFinishDate(event.target.value)}
          />
        </div>
        <Divider />
        <div style={{ marginTop: 30 }}>
          { tickets.length ? <CardList tickets={tickets} /> : <BoxInfoNoMsg title="Não há mensagens no momento" /> }
        </div>
      </div>
    </div>
  );
}
