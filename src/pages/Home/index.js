import React from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Container from '@material-ui/core/Container';
import Divider from '@material-ui/core/Divider';
import SemNotificacao from '../../component/Card/SemNotificacao';
import ComNotificacao from '../../component/Card/ComNotificacao';
import Menu from '../../component/Menu';

import './home.css';
//import mensagens from '../../temp/mensagens';
import Styles from '../../styles';

export default function Home(){
    const c = Styles();
    return(
        
        <div className={c.root}>
            <Menu />
            <div className={c.content}>
            <Paper className="ui-paper">
                <Grid container spacing={3}>
                    <Grid item xs={12} sm={8}>
                        <h2 className="h2">Relação de problemas</h2>
                        <Divider />
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <h2 className="h2" color="primary">Novas mensagen</h2>
                        <Divider />
                        <ComNotificacao texto="Isso é uma mensagem"/>
                    </Grid>
                </Grid>
            </Paper>
            </div>
        </div>
    );
}

/* 

<Paper className="ui-paper">
                    <Grid container spacing={3}>
                        <Grid item xs={12} sm={8}>
                            <h2 className="h2">Relação de problemas</h2>
                            <Divider />
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <h2 className="h2" color="primary">Novas mensagen</h2>
                            <Divider />
                            <ComNotificacao texto="Isso é uma mensagem"/>
                        </Grid>
                    </Grid>
                </Paper>

*/