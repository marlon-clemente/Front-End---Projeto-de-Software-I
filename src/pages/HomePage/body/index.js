import React from 'react';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Img from '../../../assets/home.jpg'
import Styles from './styles'

export default function Body (){
  const classes = Styles();
  return (<div className={classes.root}>
    <Grid container justify="center"alignItems="center">
      <Grid item xl={6} lg={6} md={6}>
        <Typography color="primary">
          <Box className={classes.title} fontFamily="Lato" fontSize={36} fontWeight={700}>
            Sistema para Gerenciamento de Patrimônios Escolares
          </Box>
        </Typography>
        <div className={classes.divider}/>

        <div className={classes.img_mob}><img className={classes.imagen} src={Img}/> </div>
        <Typography>
          <Box fontFamily="Roboto" fontSize={18} fontWeight={400} className={classes.text}>
            A plataforma SISGEPE tem como intuito
            trazer soluções para as escolas que
            visam controlar e minimizar o número de
            bens patrimôniais que encontram-se danificados ou em estado
            inutilizável.
          </Box>
        </Typography>
        <Button variant="contained" href="/login" color="primary" disableElevation className={classes.button}>Entrar</Button>
        <Button variant="outlined" color="primary" disableElevation className={classes.button}>Ver mais</Button>
      </Grid>
      <Grid item xl={6} lg={6} md={6} className={classes.img_web}>
        <div className={classes.box_imagen}>
          <img className={classes.imagen} src={Img}/>         
        </div>
      </Grid>
    </Grid>
  </div>)
}