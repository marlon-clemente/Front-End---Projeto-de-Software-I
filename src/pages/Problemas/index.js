import React from 'react';
import Styles from '../../styles';
import Menu from '../../component/Menu2';

import InfoBox from '../../component/BoxInfo/Column' 

export default function Problema() {  
  const c = Styles();
  var analises = {};
  return (
    <div>
      <div className={c.root}>
        <Menu title="Problemas" />
        <div className={c.content}>
            {!analises ? (<></>) : (<InfoBox />) }
        </div>
      </div>
    </div>
  );
}
