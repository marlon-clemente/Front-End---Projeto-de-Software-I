import React from 'react';
import Menu from '../../component/Menu';
import Styles from '../../styles';
import Grid from '@material-ui/core/Grid';
import CardMsg from './component/CardMsg';

export default function CaixaEntrada(){
    const c = Styles();

    return(
        <div>
            <div className={c.root}>
            <Menu title="Caixa de entrada" />
            <div className={c.content}>
            <div className={c.appBarSpacer} />
                <Grid container spacing={1}>
                    <CardMsg />
                    <CardMsg />
                    <CardMsg />
                    <CardMsg />
                </Grid>
            </div>
            </div>
        </div>
    );
}