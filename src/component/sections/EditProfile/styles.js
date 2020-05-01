import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  header: {
    display: 'flex',
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  textFiel:{
    marginTop: 10,
    width: '100%',
  },
  avatar:{
    margin: 'auto',
  },
  button:{
    margin: '8px',
  },
  divider:{
    marginTop: 18
  }
}));

export default useStyles;