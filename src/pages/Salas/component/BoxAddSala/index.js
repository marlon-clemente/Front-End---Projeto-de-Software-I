import React from 'react';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import SaveIcon from '@material-ui/icons/Save';
import Grid from '@material-ui/core/Grid';


export default function BoxAddSala(){
    return (
        <div>
            <form noValidate autoComplete="off">
                <Paper elevation={2} className="ui-paper">
                    <Grid container spacing={3}>
                        <Grid item xs={10}>
                            <TextField id="outlined-basic" label="Adicionar nova sala"
                            variant="outlined" className="ui-imput" color="primary" />
                        </Grid>

                        <Grid item xs={2}>
                            <Button variant="contained" color="primary"
                                size="large" className="ui-button"
                                startIcon={<SaveIcon />}
                            >Salvar</Button>
                        </Grid>
                    </Grid>
                </Paper>
            </form>
        </div>
    );
}