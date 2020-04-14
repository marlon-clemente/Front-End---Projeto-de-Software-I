import { makeStyles } from '@material-ui/core/styles';
import ImgBg from '../../assets/background-login.jpg';
import BackMob from '../../assets/background-login-mob.svg';

const useStyles = makeStyles((theme) => ({
    root: {
      height: '100vh',
    },
    boxH1:{
      marginTop: '5px',
      marginBottom:'20px',
    },
    boxTxt:{
      marginTop: '8px',
      marginBottom: '25px',
    },
    image: {
        backgroundImage: `url(${ImgBg})`,
        backgroundRepeat: 'no-repeat',
        backgroundColor:
        theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
        backgroundSize: 'cover',
        backgroundPosition: 'center',
    },
    resp: {
        [theme.breakpoints.down('xs')]: {
            backgroundImage: `url(${BackMob})`,
            backgroundRepeat: 'no-repeat',
        },
      },
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
    },
    buttonGoogle:{
      backgroundColor:'#ea4335',
      color: '#ffffff',
      width: '80%',
      margin: '18px',
    },
    avatar: {
      margin: theme.spacing(1),
      backgroundColor: theme.palette.secondary.main,
    },
    form: {
      width: '100%', // Fix IE 11 issue.
      marginTop: theme.spacing(1),
    },
    submit: {
      margin: theme.spacing(3, 0, 2),
    },
  }));

  export default useStyles;