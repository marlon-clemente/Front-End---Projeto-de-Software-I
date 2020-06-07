import { makeStyles } from '@material-ui/core/styles';
import ImgBg from '../../../assets/user_bg.svg';

const useStyles = makeStyles((theme) => ({
  section_description: {
    display: 'flex',
    margin: theme.spacing(8, 4),
    flexDirection: 'column',
    alignItems: 'center',
    [theme.breakpoints.down('xs')]: {
      display: 'none'
    },
  },
  
  section_description_mob: {
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
    position:'relative',
    flexDirection: 'column',
    margin: 0,
    padding: 8,
    color: '#ffffff',
    width:'100%',
    height:'50%',
    backgroundImage: `url(${ImgBg})`,
    backgroundRepeat: 'no-repeat',
    backgroundColor:theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },

  paper_buttons: {
      [theme.breakpoints.down('xs')]: {
          margin: 0,
          alignItems: 'center',
          display: 'flex',
      },
      margin: theme.spacing(8, 4),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
  },
    buttonFace:{
      backgroundColor:'#2a5297',
      color: '#ffffff',
      margin: '18px',
      border: 0,
      fontSize: 15,
      padding: 15,
      cursor: 'pointer',
      borderRadius: '3px',
      fontWeight: 'bold',
      '&:hover':{
        backgroundColor: '#2a5277',
        color: '#ffffff',
      },
    },
    
    buttonGoogle:{
      backgroundColor:'#ea4335',
      color: '#ffffff',
      margin: '18px',
      '&:hover':{
        backgroundColor: '#ea4344',
        color: '#ffffff',
      },
    },
    buttonTroca: {
      margin: theme.spacing(3),
    },
  }));
  export default useStyles;