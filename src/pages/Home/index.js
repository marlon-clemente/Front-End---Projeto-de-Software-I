import React from 'react';
import Grid from '@material-ui/core/Grid';
import Menu from '../../component/Menu';

import Styles from '../../styles';
import BoxProb from './components/BoxProblemas';
import BoxMsg from './components/BoxMensagens';

export default function Home(){
    const c = Styles();
    return(
        <div className={c.root}>
            <Menu title="Página Inicial"/>
            <div className={c.content}>
            <div className={c.appBarSpacer} />
                <Grid container spacing={4}>
                    <Grid item xl={8} lg={12} md={12} sm={12} xs={12}>
                        <BoxProb />
                    </Grid>
                    <Grid item xl={4} lg={12} md={12} sm={12} xs={12}>
                        <BoxMsg />
                    </Grid>
                </Grid>
            </div>
        </div>
    );
}