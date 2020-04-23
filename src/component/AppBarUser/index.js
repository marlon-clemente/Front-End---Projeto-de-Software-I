import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

import Styles from './styles';

export default function AppBarUser() {
    const classes = Styles();
    return (
        <div className={classes.roor}>
            <AppBar position="fixed" className={classes.appBar} color="secondary">
                <Toolbar>
                    <Typography variant="h6" noWrap>
                        Bem Vindo @usuario
                    </Typography>
                </Toolbar>
            </AppBar>
        </div>
    )
}
