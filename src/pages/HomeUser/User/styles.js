import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      flexDirection: 'column',
      '& > *': {
        margin: theme.spacing(1),
      },
    },
    large: {
      width: theme.spacing(8),
      height: theme.spacing(8),
      marginTop:36 ,
      margin: 'auto',
    },
    nome:{
      fontFamily: 'Lato',
      fontSize:22,
      fontWeight: 700,
      height:24,
      color: '#ffffff'
    }
  }));

  export default useStyles;