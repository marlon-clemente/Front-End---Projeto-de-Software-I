import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    paper: {
        [theme.breakpoints.down('xs')]: {
            margin: theme.spacing(20 , 4),
        },
        margin: theme.spacing(8, 4),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    buttonFace:{
      backgroundColor:'#2a5297',
      color: '#ffffff',
      width: '80%',
      margin: '18px',
      '&:hover':{
        backgroundColor: '#2a5277',
        color: '#ffffff',
      },
    },
    
    buttonGoogle:{
      backgroundColor:'#ea4335',
      color: '#ffffff',
      width: '80%',
      margin: '18px',
      '&:hover':{
        backgroundColor: '#ea4344',
        color: '#ffffff',
      },
    },
    avatar: {
      margin: theme.spacing(1),
      backgroundColor: theme.palette.secondary.main,
    },
  }));

  export default useStyles;