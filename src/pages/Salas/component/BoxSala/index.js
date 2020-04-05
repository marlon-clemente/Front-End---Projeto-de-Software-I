import React from 'react';
import Paper from '@material-ui/core/Paper';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import Grid from '@material-ui/core/Grid';

export default function BoxSala(props){
    return (
        <div>
            <Paper elevation={2}>
                <Grid container spacing={3}>
                        <Grid item xs={10}>
                            <h2>{ props.sala }</h2>
                        </Grid>
                        <Grid item xs={1}>
                            <IconButton className="ui-button-icon" edge="end" aria-label="delete">
                      <DeleteIcon/>
                    </IconButton>
                        </Grid>
                        <Grid item xs={1}>
                            <IconButton edge="end" aria-label="delete">
                      <DeleteIcon/>
                    </IconButton>
                        </Grid>
                    </Grid>
                  
                    
            </Paper>
        </div>
    );
}