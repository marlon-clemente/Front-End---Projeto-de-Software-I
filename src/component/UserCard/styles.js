import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    card:{
      width:'100%',
      display: 'flex',
        flexDirection: 'column',
      alignItems: 'center',
    },
    media: {
      height: 0,
      paddingTop: '56.25%', // 16:9
    },
    expand: {
      transform: 'rotate(0deg)',
      marginLeft: 'auto',
      transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
      }),
    },
    expandOpen: {
      transform: 'rotate(180deg)',
    },
    avatar: {
      margin: theme.spacing(1),
      width: theme.spacing(7),
      height: theme.spacing(7),
    },
  }));

  export default useStyles;