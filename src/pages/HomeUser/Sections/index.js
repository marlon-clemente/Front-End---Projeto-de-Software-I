import React, { useContext, useEffect, useState } from 'react'
import BoxMsg from './boxMsg';
import BoxNoMsg from './boxNoMsg';

import DataContext from '../../../context/Data';

export default function Switcher() {
  const { tickets, fetchTickets } = useContext(DataContext);
  const [error, setError] = useState({});
  
  const getTickets = async() => {
    await fetchTickets((res, error) => {
      if (error)
        setError(error);
    });
  }

  useEffect(() => {
    getTickets();
  }, []);
  
  setInterval(() => {
    getTickets();
  }, 600000);

  return (
    <div>
      {tickets.length ? <BoxMsg tickets={tickets} /> : <BoxNoMsg error={error} />}
    </div>
  )
}
