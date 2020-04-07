import React from 'react';
import Style from './styles';
import Tables from './Table';
import Paper from "@material-ui/core/Paper";
import Divider from '@material-ui/core/Divider';
import Title from "../../../../component/Title";
import '../../../../global.css';

export default function BoxProblemas(){
    const classes = Style();
    return (
            <div className={classes.root}>
                <Paper elevation={2} className={classes.paper}>
                    <Title>Problemas</Title>
                    <Divider />
                    
                </Paper>
            </div>
       
    );
}