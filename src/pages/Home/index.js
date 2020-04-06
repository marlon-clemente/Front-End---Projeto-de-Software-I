import React from 'react';
import Grid from '@material-ui/core/Grid';
import Menu from '../../component/Menu';

import Styles from '../../styles';
import BoxProb from './components/BoxProblemas';
import BoxMsg from './components/BoxMensagens';


export default function Home(){
    const c = Styles();
    return(
        
        <div className={c.root}>
            <Menu />
            <div className={c.content}>
            <div className={c.appBarSpacer} />
                <Grid container spacing={5}>
                    <Grid item xs={12} sm={8}>
                        <BoxProb />
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <BoxMsg />
                    </Grid>
                </Grid>
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