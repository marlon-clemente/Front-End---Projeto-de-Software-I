import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'block',
    position: 'relative',
    backgroundColor: '#ffffff',
    height: '100vh',
    width: 400,
    textAlign: 'center',
    alignItems: 'center',
    fontFamily: 'lato',
    borderRightColor: '#fdfdf',
  },
  avatar:{
    margin: 'auto',
  },
  icon:{
    margin: 2,
  },
  content: {
    [theme.breakpoints.up('xs')]: {
      width:'360px',
    },
    flexGrow: 1,
    height: '100vh',
    padding: theme.spacing(3),
  },
  button:{
    margin: 8,
  },
}));

export default useStyles;