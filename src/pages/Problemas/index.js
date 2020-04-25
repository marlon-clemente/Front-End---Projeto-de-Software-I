import React from 'react';
import Styles from '../../styles';
import Menu from '../../component/Menu2';

export default function Problema(){
    const c = Styles();

    return(
        <div>
            <div className={c.root}>
                <Menu />
                <div className={c.content}>
                
                </div>
            </div>
        </div>
    );
}