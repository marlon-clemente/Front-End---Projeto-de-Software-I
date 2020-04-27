import React from 'react';
//import Grid from '@material-ui/core/Grid';
import AppBar from '../../component/AppBarUser';
//import Fab from '@material-ui/core/Fab';
//import AddCommentIcon from '@material-ui/icons/AddComment';

//import User from './User';
//import CardVazio from './CardVazio';
import Styles from './styles';

export default function Home(props) {
    const classes = Styles();
    return (
        <div className={classes.root}>
            <AppBar/>
            <h1> nome </h1>
        </div>
    )
}



