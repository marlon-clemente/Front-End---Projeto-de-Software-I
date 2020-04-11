import React from 'react';
import Grid from '@material-ui/core/Grid';
import Menu from '../../component/Menu';
import { makeStyles } from '@material-ui/core/styles';

import Styles from '../../styles';

export default function Ajuda() {
    const c = Styles();
    const [expanded, setExpanded] = React.useState(true);

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    return (
        <div className={c.root}>
            <Menu title="Ajuda" />
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
