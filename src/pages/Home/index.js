import React from 'react';
import Grid from '@material-ui/core/Grid';
import Menu from '../../component/Menu';
import Paper from '@material-ui/core/Paper';
import Container from '@material-ui/core/Container';
import Divider from '@material-ui/core/Divider';

import './home.css';

export default function Home(){
    return(
        <div>
            <Container className="container">
                <Menu title="Página Inicial"/>
                <Grid container spacing={3}>
                    <Grid item xs={12} sm={8}>
                        <Paper className="ui-paper">
                            <h2 className="ui-h2">Relação de problemas</h2>
                            <Divider />
                        </Paper>
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <Paper className="ui-paper">
                            <h2 className="ui-h2" color="primary">Novas mensagen</h2>
                            <Divider />
                        </Paper>
                    </Grid>
                </Grid>

            </Container>
        </div>
    );
}