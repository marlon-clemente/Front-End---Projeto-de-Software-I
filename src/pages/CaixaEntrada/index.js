import React, { useContext, useEffect } from 'react';
import Menu from '../../component/Menu2';
import Styles from '../../styles';
import BoxInfoNoMsg from '../../component/BoxInfo/Default';

import RecipeReviewCard from './component/CardMsg';
import DataContext from '../../context/Data';

export default function CaixaEntrada() {
  const classes = Styles();
  const { tickets, fetchTickets } = useContext(DataContext);

  const getTickets = async() => {
    await fetchTickets((res, error) => {
      if (error)
        console.log(error);
      else
        console.log(res);
    });
  }

  useEffect(() => {
    if (!tickets.length)
      getTickets();
  }, []);

  return (
    <div className={classes.root}>
      <Menu />
      <div className={classes.content}>
        { tickets.length ? <RecipeReviewCard tickets={tickets} /> : <BoxInfoNoMsg title="Não há mensagens no momento" /> }
      </div>
    </div>
  );
}
