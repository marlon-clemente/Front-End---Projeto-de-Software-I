import React from 'react';
import Grid from '@material-ui/core/Grid';
import Menu from '../../component/Menu2';

import Styles from '../../styles';

export default function Ajuda() {
    const c = Styles();

    return (
        <div className={c.root}>
            <Menu/>
            <div className={c.content}>
            <div className={c.appBarSpacer} />
                <Grid container direction="row-reverse" spacing={4}>
                    <Grid item xl={4} lg={12} md={12} sm={12} xs={12}>
                        
                    </Grid>

                    <Grid item xl={8} lg={12} md={12} sm={12} xs={12}>
                        
                    </Grid>
                </Grid>
            </div>      
        </div>
    )
}
