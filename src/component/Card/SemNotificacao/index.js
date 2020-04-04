import React from 'react';
import Paper from '@material-ui/core/Paper';

import './semnotificacao.css';

export default function SemNotificacao(){
    return(
        <div>
            <Paper className="paper" elevation={0}>
                <h3>Não há novas mensagens</h3>
            </Paper>
        </div>
    );
}