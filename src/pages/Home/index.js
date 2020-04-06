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
            <Menu />
            <div className={c.content}>
            <div className={c.appBarSpacer} />
                <Grid container spacing={4}>
                    <Grid item xs={8} sm={8}>
                        <BoxProb />
                    </Grid>
                    <Grid item xs={8} sm={4}>
                        <BoxMsg />
                    </Grid>
                </Grid>
            </div>
        </div>
    );
}