import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  section_description: {
      display: 'flex',
      margin: theme.spacing(8, 4),
      flexDirection: 'column',
      alignItems: 'center',
      // backgroundColor: 'red',
      [theme.breakpoints.down('xs')]: {
        display: 'none',
      },
    },
  
  section_description_mob: {
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
    margin: theme.spacing(8 , 2),
    flexDirection: 'column',
    alignItems: 'center',
    },

    paper_buttons: {
        [theme.breakpoints.down('xs')]: {
            margin: theme.spacing(8 , 2),
        },
        margin: theme.spacing(8, 4),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        // backgroundColor: 'red',
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