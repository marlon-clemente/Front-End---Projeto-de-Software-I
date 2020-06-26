import React from 'react';
import Styles from './styles';
import Menu from '../../component/Menu2';

import Report from '../../component/Report';

export default function Problema() {  
  const c = Styles();
  var analises = {};
  return (
    <div className={c.root}>
      <Menu title="Problemas" />
      <div className={c.content}>
        {!analises ? (<></>) : (<Report />) }
      </div>
    </div>
  );
}
