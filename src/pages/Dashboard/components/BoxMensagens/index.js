import React from 'react';
import Paper from '@material-ui/core/Paper';
import Title from '../../../../component/Title';
import Style from './styles';
import Divider from '@material-ui/core/Divider';
import ComMsg from './comMsg';

import mensagens from '../../../../temp/mensagens';

export default function BoxMensages(){
    const classes = Style();
    return (
        <div>
            <div className={classes.root}>
                <Paper elevation={2} className={classes.paper}>
                        <Title>Ultimas mensagens</Title>
                        <Divider />
                        <ComMsg mensagens={mensagens}/>
                </Paper>
            </div>
        </div>
    );
}