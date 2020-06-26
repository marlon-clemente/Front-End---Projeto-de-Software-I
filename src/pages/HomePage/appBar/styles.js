import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root:{
      backgroundColor: '#ffffff',
      flexGrow: 1,
      userSelect:'none',
    },
    line: {
      marginTop:'32px',
      display: 'flex',
      marginBottom: '32px',
    },
    button:{
      [theme.breakpoints.down('xs')]: {
        display: 'none'
      },
      position: 'relative',
      float:'right',
      height: '46px',
      width: '190px',
      paddingLeft: '17px',
      marginLeft: '5px',
      fontWeight:600,
      paddingRight: '17px',
      marginRight: theme.spacing(2),
    },
    title:{
      flexGrow: 1,
      marginLeft: '10px',
      fontFamily: 'Lato',
      fontSize:  '36px',
      fontWeight: '800',
      color: theme.palette.primary.main,
    },
    logo:{
      height: '46px',
    },
  }),
  );
  
  export default useStyles;