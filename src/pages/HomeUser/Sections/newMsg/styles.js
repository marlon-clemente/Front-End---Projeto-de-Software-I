import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    layout: {
      width: 'auto',
      backgroundColor: theme.palette.background.default,
      [theme.breakpoints.down('xs')]: {
        marginLeft: 0,
        marginRight: 0,
      },
      [theme.breakpoints.up('sm')]: {
        marginLeft: 0,
        marginRight: 0,
      },
      [theme.breakpoints.up('md')]: {
        marginLeft: 50,
        marginRight: 50,
      },
      [theme.breakpoints.up('lg')]: {
        marginLeft: 100,
        marginRight: 100,
      },
      [theme.breakpoints.up('xl')]: {
        marginLeft: 200,
        marginRight: 200,
      },
    },
    imgBox:{
      margin: 'auto',
      marginBottom: '12px',
      width: '260px',
      height: '260px',
    },
    inputImg:{
      display: 'block',
      fontFamily: 'Lato',
      color:'#ffffff',
      fontSize: '18px',
      backgroundColor: theme.palette.secondary.main,
      borderRadius: 10,
      height: '100%',
      width: '100%',
      cursor: 'pointer',
    },
    inputNone:{
      display: 'none'
    },
    imgPrewiew:{
      position: 'relative',
      width: '100%',
      height: '100%'
    },
    checkedBox:{
      marginTop: '8px',
      marginBottom: '8px',
    },
    paper: {
      marginTop: theme.spacing(3),
      marginBottom: theme.spacing(3),
      padding: theme.spacing(2),
    },
    grid_img:{
      alignContent:'center',
    },
    form: {
      marginTop: theme.spacing(3),
    },
    invisible:{
      display:'none'
    },
    button_e: {
      marginTop: theme.spacing(3),
      marginLeft: theme.spacing(1),
      width: '100%',
    },
    button_c: {
      marginTop: theme.spacing(3),
      marginLeft: theme.spacing(1),
      width: '100%',
    },
    label: {
      fontFamily: 'Lato',
      fontSize: '18',
      textAlign:'center',
      margin: 'auto',
      cursor: 'pointer',
      color: theme.palette.secondary.color
    },
    icon:{
      fontSize: '85px',
      marginTop: '60px',
      alignItems: 'center',
    }
  }),
);

export default useStyles;