import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  section: {
    display: 'flex',
    margin: theme.spacing(8, 4),
    flexDirection: 'column',
    alignItems: 'center',
  },
  form: {
    width: '100%',
    padding: 16,
    marginTop: theme.spacing(1),
  },
  button:{
    backgroundColor:'#336666',
    color: '#ffffff',
    marginTop: '6px',
    width: '100%',
    '&:hover':{
      backgroundColor: '#336655',
      color: '#ffffff',
    },
  },
}));
export default useStyles;