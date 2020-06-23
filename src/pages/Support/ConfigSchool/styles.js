import { makeStyles } from '@material-ui/core/styles';

const UseStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    height: '100vh',
    [theme.breakpoints.down('md')]: {
      display:'block',
    },
  },
  title:{
    marginBottom: 16,
    [theme.breakpoints.down('md')]: {
      display:'none',
    },
  },
  list:{
  },
  box:{
    alignItems: 'center',
    fontFamily: 'Lato',
    fontSize: 18,
    display: 'flex'
  },
  subtitle:{
    marginBottom: 16,
  },
  content: {
    [theme.breakpoints.down('md')]: {
      margin: 0, 
      flexGrow:0,
    },
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  imput:{
    width: '100%'
  },
  grid: {
    [theme.breakpoints.down('md')]: {
      width: '100%'
    },
    width: '50%'
  },
  paper: {
    padding: theme.spacing(2),
    marginBottom: theme.spacing(2),
    margin: 'auto',
    width: '350px',
    display: 'flex',
    flexDirection: 'column',
    [theme.breakpoints.down('md')]: {
      width: 'auto'
    },
  },
  button:{
    [theme.breakpoints.down('md')]: {
      width: 'auto'
    },
    [theme.breakpoints.down('xs')]: {
      width: '100%'
    },
    marginTop: 8,
    marginBottom: 8,
    width: '50%'
  }
  }));

  export default UseStyles;