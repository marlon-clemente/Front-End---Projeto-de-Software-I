import React from 'react';
import Grid from '@material-ui/core/Grid';
//import Menu from '../../component/Menu';
import Menu from '../../component/Menu2';
import Styles from '../../styles';
import BoxProb from './components/BoxProblemas';
import BoxMsg from './components/BoxMensagens';

export default function Dashboard(){
    const c = Styles();
    return(
        <div className={c.root}>
        <Menu title="Dashboard"/>
        <div className={c.content}>
            <Grid container spacing={4}>
                <Grid item xl={9} lg={12} md={12} sm={12} xs={12}>
                    <BoxProb />
                </Grid>
                <Grid item xl={3} lg={12} md={12} sm={12} xs={12}>
                    <BoxMsg />
                </Grid>
            </Grid>
        </div>
        </div>
    );
}