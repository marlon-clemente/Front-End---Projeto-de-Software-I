import { makeStyles } from '@material-ui/core/styles';
import ImgBg from '../../assets/background-login.jpg';

const useStyles = makeStyles((theme) => ({
    root: {
      height: '100vh',
      userSelect:'none',
    },
    trocar: {
        bottom: '16px',
        margin: 'auto',
        position: 'absolute'
    },
    block_logo:{
        marginTop: 32,
        [theme.breakpoints.down('xs')]: {
            display: 'none',
        },
    },
    external_logo:{
        paddingTop:14,
        paddingRight:14,
        flexGrow: 1,
        textAlign: 'right'
    },
    logo:{
        margin:'auto',
        position: 'relative',
        height: 46,
    },
    title:{
        marginLeft: '3px',
        fontFamily: 'Lato',
        fontSize: '36px',
        color: theme.palette.primary.main,
        fontWeight: 800,
        flexGrow: 1
    },
    image: {
        backgroundImage: `url(${ImgBg})`,
        backgroundRepeat: 'no-repeat',
        backgroundColor:theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
        backgroundSize: 'cover',
        backgroundPosition: 'center',
    },
    image_r:{
        [theme.breakpoints.down('xs')]: {
            // backgroundImage: `url(${BackMob})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
        },
    }
  }));

  export default useStyles;