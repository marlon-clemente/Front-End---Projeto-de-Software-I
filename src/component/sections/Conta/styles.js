import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  avatar:{
    margin: 'auto',
    color: theme.palette.primary.main,
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