import React from 'react';
import Styles from './styles';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import AddCommentIcon from '@material-ui/icons/AddComment';

export default function BoxNoMsg() {
  const classes = Styles();

  return (
    <div className={classes.root}>
      <Typography component="div"><Box fontFamily="Lato"
        fontSize={30}
        fontWeight={500}
        textAlign="center"
        color="#808080"
        m={2}>
        Nenhuma mensagem no momento</Box>
        <Box fontFamily="Lato"
        fontSize={23}
        fontWeight={400}
        textAlign="center"
        color="primary">
        Use o botão <AddCommentIcon color="secondary" /> na
        parte inferior 
        da tela <br/> para reportar algum 
        problema para a direção de sua
        escola.</Box>
      </Typography>
    </div>
  )
}
