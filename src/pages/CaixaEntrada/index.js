import React from 'react';
import Menu from '../../component/Menu2';
import Styles from '../../styles';
import BoxInfoNoMsg from '../../component/BoxInfo/Default';

var mensagens = {};

export default function CaixaEntrada() {
  const classes = Styles();
  return (
    <div className={classes.root}><Menu />
      <div className={classes.content}>
        { !mensagens ? (<>combo 1</>) : (<BoxInfoNoMsg title="Não há mensagens no momento" />) }
    </div></div>
  );
}
