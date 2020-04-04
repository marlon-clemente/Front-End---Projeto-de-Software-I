import React from 'react';
import Grid from '@material-ui/core/Grid';
import Menu from '../../component/Menu';
import Paper from '@material-ui/core/Paper';
import Container from '@material-ui/core/Container';
import Divider from '@material-ui/core/Divider';
import SemNotificacao from '../../component/Card/SemNotificacao';
import ComNotificacao from '../../component/Card/ComNotificacao';

import './home.css';
import mensagens from '../../temp/mensagens';


export default function Home(){
    return(
        <div>
            <Container className="container">
                <Menu title="Página Inicial"/>
                    <Paper className="ui-paper">
                    <Grid container spacing={3}>
                        <Grid item xs={12} sm={8}>
                            <h2 className="h2">Relação de problemas</h2>
                            <Divider />
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <h2 className="h2" color="primary">Novas mensagen</h2>
                            <Divider />
                            <ComNotificacao texto="Aqui uma descrição"/>
                        </Grid>
                    </Grid>
                    </Paper>
            </Container>
        </div>
    );
}