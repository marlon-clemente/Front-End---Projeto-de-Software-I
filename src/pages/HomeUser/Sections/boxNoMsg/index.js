import React from 'react';
import Styles from './styles';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import AddCommentIcon from '@material-ui/icons/AddComment';

export default function BoxNoMsg({ error }) {
  const classes = Styles();

  return (
    <div className={classes.root}>
      <Typography component="div">
      {error?.name ? (
        <Box
          fontFamily="Lato"
          fontSize={30}
          fontWeight={500}
          textAlign="center"
          color="#808080"
          m={2}
        >
          Ocorreu um erro ao consultar o servidor. <br/> Experimente recarregar a página!
        </Box>
      ) : (
        <>
          <Box
            fontFamily="Lato"
            fontSize={30}
            fontWeight={500}
            textAlign="center"
            color="#808080"
            m={2}
          >
            Nenhum ticket no momento
          </Box>
          <Box
            fontFamily="Lato"
            fontSize={23}
            fontWeight={400}
            textAlign="center"
            color="primary"
          >
            Use o botão <AddCommentIcon color="secondary" /> na parte inferior da tela <br/> para reportar um problema para a direção de sua escola.
          </Box>
        </>
      )}
      </Typography>
    </div>
  )
}
