import React from 'react';
import Style from './styles';
import Tables from './Table';
import Paper from "@material-ui/core/Paper";
import Title from "../../../../component/Title";
import '../../../../global.css';

export default function BoxProblemas(){
    const classes = Style();
    return (
        <div>
            <Paper className={classes.paper}>
                <Title>Problemas</Title>
                <Tables />
            </Paper>
        </div>
    );
}