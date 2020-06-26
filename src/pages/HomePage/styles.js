import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'block',
  },
  content: {
    marginLeft: '125px',
    marginRight: '125px',
    [theme.breakpoints.down('md')]: {
      marginLeft: '35px',
      marginRight: '35px',
    },
  },
  }));

  export default useStyles;