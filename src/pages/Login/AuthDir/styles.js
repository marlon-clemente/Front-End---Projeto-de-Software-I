import { makeStyles } from '@material-ui/core/styles';
import ImgBg from '../../../assets/dir_bg.svg';

const useStyles = makeStyles((theme) => ({
    paper: {
        [theme.breakpoints.down('xs')]: {
          margin: 0,
        },
        marginTop: 12,
        margin: theme.spacing(8, 4),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    section_desktop:{
      [theme.breakpoints.down('xs')]: {
        display: 'none'
      },
    },
    logo:{
      [theme.breakpoints.down('xs')]: {
        display: 'none'
      }
    },
    section_mobile:{
      [theme.breakpoints.up('sm')]: {
        display: 'none'
      },
      padding:8,
      width:'100%',
      height: '40vh',
      backgroundImage: `url(${ImgBg})`,
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    },
    form: {
      width: '100%',
      padding: 16,
      marginTop: theme.spacing(1),
      
    },
    button: {
      margin: theme.spacing(3, 0, 2),
    },
    alert:{
      fontFamily: 'Robotto',
      fontSize: 14,
    },
    link:{
      cursor: 'pointer',
      userSelect:'none',
    }
  }));

  export default useStyles;
