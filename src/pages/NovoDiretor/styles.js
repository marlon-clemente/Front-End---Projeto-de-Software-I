import { makeStyles } from '@material-ui/core/styles';

const UseStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      overflow: 'hidden',
      padding: theme.spacing(0, 3),
    },
    paper: {
      maxWidth: 600,
      margin: `${theme.spacing(1)}px auto`,
      padding: theme.spacing(2),
      marginTop:'40px',
      textAlign:'center',     
      alignItems: 'center', 
    },
    titulo:{      
      margin: theme.spacing(6),
      marginTop:theme.spacing(1),
      fontSize:'28px'
    },
    subtitulo:{     
      margin: theme.spacing(2),
      fontSize:'18px'
    },
    form: {
      width: '100%', // Fix IE 11 issue.
      marginTop: theme.spacing(1),
      alignItems: 'center',
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
        borderRadius:"35px",
        textAlign:'center',     
        alignItems: 'center', 
        width:"50%",
        
        alignSelf:'center' 
    }
  }));

  export default UseStyles;