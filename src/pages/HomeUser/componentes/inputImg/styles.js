import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    layout: {
      position: 'realtive',
      fontFamily: 'Lato',
      margin:'auto',
      alignContent: 'center',
      textAlign: 'center',
    },
    paper: {
      width: '100vh',
      height: '100vh',
      maxHeight: 280,
      maxWidth: 280,
      margin: 'auto',
      backgroundColor: theme.palette.secondary.main,
      borderRadius: 10,
    },
    icon:{
      margin: 'auto',
      fontSize: 40,
      color:"#ffffff",
    },

  }),
);

export default useStyles;