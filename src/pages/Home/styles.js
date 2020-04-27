import { makeStyles } from '@material-ui/core/styles';
import ImgBg from '../../assets/background-login.jpg';
import BackMob from '../../assets/background-login-mob.svg';

const useStyles = makeStyles((theme) => ({
    root: {
      height: '100vh',
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
  }));

  export default useStyles;