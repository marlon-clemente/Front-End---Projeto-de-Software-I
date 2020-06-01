import React, {useState } from 'react';
import Menu from '../../component/Menu2';
import Box from '@material-ui/core/Box';
import Styles from './styles';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import salas from '../../temp/sala';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import SaveIcon from '@material-ui/icons/Save';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

export default function Salas(){
    const c = Styles();

    const [sala, setSala] = useState(salas);
    
    function addSala(){
        setSala([ ...sala,
                    { id: Math.random(), nome: "" }
                ]);
    }
    
    function Linha(props){
        return (
            <> 
                <Paper className={c.paper}>
                <Grid container>
                    <Grid item xl={10} lg={10} md={10} sm={10} xs={10}>
                        <Box fontSize="h6.fontSize"
                         m={1}>
                            {props.value}
                        </Box>
                    </Grid>
                    <Grid item xl={2} lg={2} md={2} sm={2} xs={2}>
                            <IconButton color="primary" aria-label="upload picture" component="span">
                                <DeleteIcon />
                            </IconButton>
                    </Grid>
            </Grid>
                </Paper>
            </>
        );
    }

    function ViewAddSala(){
        return(
            <>
            <form noValidate autoComplete="off">
                <Grid container alignItems="center" spacing={4}>
                    <Grid item xl={3} lg={12} md={12} sm={12} xs={12}>
                        <TextField 
                            id="outlined-basic"
                            label="Nova sala..."
                            variant="standard"
                            className={c.imput} 
                        />
                    </Grid>
                    <Grid item xl={3} lg={12} md={12} sm={12} xs={12}>     
                            <Grid container spacing={4}>

                                <Button
                                    variant="contained"
                                    color="primary"
                                    onClick={addSala}
                                    className={c.button}
                                    startIcon={<SaveIcon />}
                                >Salvar</Button>
                            </Grid>
                    </Grid>
                </Grid>
            </form>
            </>
        )
    }

    return(
        <div className={c.root}>
        <Menu />
        <div className={c.content}><div className={c.appBarSpacer} />
            <ViewAddSala />
            <Grid container spacing={4}>
                {sala.map((item)=>(
                    <Grid item xl={6} lg={6} md={6} sm={6} xs={12}>
                        <Linha value={item.nome} />
                    </Grid>
                    ))
                }

            </Grid>
        </div></div>
    );
}

/**

{salas.map((item)=>(<BoxSala sala={item}/>))
                        }

 */