import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root:{
      display: 'block',
      flexGrow:0,
      marginBottom: '28px',
      userSelect:'none',
    },
    boxLeft:{
      display: 'block',
      alignItems: 'center',
      justifyContent: 'center'
    },
    divider:{
      position: 'relative',
      backgroundColor: theme.palette.primary.main,
      height: '5px',
      width: '100px',
      marginTop: '18px',
      marginBottom: '18px'
    },
    box_imagen:{
      [theme.breakpoints.down('sm')]: { //azul
        display: 'none',
      },
      overflow: 'hidden'
    },
    img_mob:{
      [theme.breakpoints.up('md')]: { //azul
        display:'none'
      },
    },
    img_web:{
      [theme.breakpoints.down('sm')]: { //azul
        display: 'none',
      },
      overflow: 'hidden'
    },
    imagen: {
      width: '100%',
    },
    title:{
      display: 'block',
      [theme.breakpoints.down('xs')]: {
        fontSize: 30,
      },
    },
    text:{
      display: 'block',
      [theme.breakpoints.down('md')]: {
        textAlign: 'justify'
      },
    },
    button:{
      marginRight: theme.spacing(2),
      [theme.breakpoints.up('xs')]: { //mobile
        height: '46px',
        width: '100%',
        paddingLeft: '17px',
        marginLeft: 0,
        fontWeight:600,
        marginTop: '12px',
        paddingRight: '12px',
      },
      [theme.breakpoints.up('md')]: { //verde
        height: '40px',
        paddingLeft: '17px',
        marginLeft: 0,
        fontWeight:600,
        marginTop: '32px',
        paddingRight: '12px',
      },
      [theme.breakpoints.up('lg')]: { //amarelo
        height: '46px',
        width: '160px',
        paddingLeft: '17px',
        marginLeft: 0,
        fontWeight:600,
        marginTop: '32px',
        paddingRight: '12px',
      },
    }
  }),
  );
  
  export default useStyles;