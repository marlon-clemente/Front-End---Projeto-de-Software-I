import React from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ThemeGreen from '../../Theme';

import Menu from '../../component/Menu';

export default function Header(props){
    return(
        <div>
        <Menu />
        <ThemeProvider theme={ThemeGreen}>
            <AppBar position="static" color="primary">
            <Toolbar>
                <IconButton edge="start" color="inherit" aria-label="menu">
                <MenuIcon />
                </IconButton>
                <Typography variant="h6">
                    {props.title}
                </Typography>
            </Toolbar>
            </AppBar>
        </ThemeProvider>
        </div>
    );
}