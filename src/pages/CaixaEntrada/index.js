import React from 'react';
import Menu from '../../component/Menu';
import Styles from '../../styles';

export default function CaixaEntrada(){
    const c = Styles();

    return(
        <div>
            <div className={c.root}>
            <Menu title="Caixa de entrada" />
            <div className={c.content}>
            
            </div>
        </div>
        </div>
    );
}