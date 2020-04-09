import React from 'react';
import Grid from '@material-ui/core/Grid';
import Menu from '../../component/Menu';
import Styles from '../../styles';

export default function Ajuda() {
    const c = Styles();
    return (
        <div className={c.root}>
            <Menu title="Ajuda" />
            <div className={c.content}>
            <div className={c.appBarSpacer} />
                <Grid container spacing={4}>
                    <Grid item xl={8} lg={12} md={12} sm={12} xs={12}>
                        <h1>Des</h1>
                    </Grid>
                    <Grid item xl={4} lg={12} md={12} sm={12} xs={12}>
                        <h1>sec</h1>
                    </Grid>
                </Grid>
            </div>      
        </div>
    )
}
