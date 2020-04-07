import React from 'react';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import SaveIcon from '@material-ui/icons/Save';
import Grid from '@material-ui/core/Grid';
import Style from '../../styles';

export default function BoxAddSala(){
    const classes = Style();
    return (
        <div>
            <form noValidate autoComplete="off">
                <Grid container spacing={4}>
                    <Grid item xl={6} lg={12} md={12} sm={12} xs={12}>
                        <TextField id="outlined-basic" label="Buscar sala..." variant="outlined" />
                    </Grid>
                    <Grid item xl={6} lg={12} md={12} sm={12} xs={12}>     
                            <Grid container spacing={4}>
                                <Button
                                    variant="contained"
                                    color="primary"
                                    className={classes.button}
                                    startIcon={<SaveIcon />}
                                >Nova sala</Button>
                            </Grid>
                    </Grid>
                </Grid>
            </form>
        </div>
    );
}