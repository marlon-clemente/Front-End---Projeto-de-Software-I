import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'block',
    backgroundColor: '#ffffff',
    height: '100vh',
    width: 400,
    textAlign: 'center',
    alignItems: 'center',
    fontFamily: 'lato',
    //border

    boxShadow: '5px 0px 40px 0px #212121',
  },
  content: {
    [theme.breakpoints.up('xs')]: {
      width:'360px',
    },
    flexGrow: 1,
    height: '100vh',
    padding: theme.spacing(3),
  },
  paper: {
    padding: theme.spacing(2),
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column',
  },
}));

export default useStyles;