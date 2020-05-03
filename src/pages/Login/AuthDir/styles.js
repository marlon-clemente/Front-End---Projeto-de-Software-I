import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles((theme) => ({
    paper: {
        [theme.breakpoints.down('xs')]: {
            margin: theme.spacing(20 , 4),
        },
        margin: theme.spacing(8, 4),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },

    avatar: {
      margin: theme.spacing(1),
      backgroundColor: theme.palette.primary.main,
    },
    form: {
      width: '100%', // Fix IE 11 issue.
      marginTop: theme.spacing(1),
    },
    submit: {
      margin: theme.spacing(3, 0, 2),
    },
    titulo:{      
      margin: theme.spacing(6),
      marginTop:theme.spacing(1),
      fontSize:'32px'
    },
    subtitulo:{     
      margin: theme.spacing(2),
      fontSize:'20px'
    },
    alert:{
      fontFamily: 'Robotto',
      fontSize: 14,
    }
  }));

  export default useStyles;
