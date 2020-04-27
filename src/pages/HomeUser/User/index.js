import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Divider from '@material-ui/core/Divider';
import Button from '@material-ui/core/Button';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

import Styles from './styles';

export default function index() {
    const classes = Styles();
    return (
        <div className={classes.root}>
            <Avatar 
                alt="Remy Sharp" 
                src="/static/images/avatar/1.jpg"
                className={classes.large}
            />
            <div className={classes.nome} >Marlon Clemente Soares</div>
            <Button 
                variant="contained"
                color="primary"
                startIcon={<ExitToAppIcon />}
                Primary
                >
                LogOut
            </Button>
            <Divider/>
        </div>
    )
}
