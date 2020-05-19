import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  header: {
    display: 'flex',
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  avatar:{
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
    backgroundColor: '#BDBDBD',
    color: theme.palette.primary.main,
    borderRadius:300,
    height:128,
    width:128,  
  },

  buttonImagen:{
    border: `2px solid ${theme.palette.background.paper}`,
    height: 45,
    width: 45,
    backgroundColor: theme.palette.primary.main,
    borderRadius:300,
  },
  inputImage: {
    display: 'none',
  },
  textFiel:{
    marginTop: 10,
    width: '100%',
  },
  button:{
    margin: '8px',
  },
  divider:{
    marginTop: 18
  }
}));

export default useStyles;