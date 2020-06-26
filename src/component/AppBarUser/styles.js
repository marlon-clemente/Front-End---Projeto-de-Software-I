import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      backgroundColor: theme.palette.background.default,
    },
    avatar: {
      marginRight: theme.spacing(2),
      [theme.breakpoints.down('md')]: {
        width: '75px',
        height: '75px',
        marginTop: '20px',
        margin:'auto',
      },
    },
    logo:{
      width: '50px',
      fill: '#ffffff',
    },
    marca:{
      display: 'flex',
      margin: 'auto',
      alignItems: 'center'
    },
    title: {
      marginLeft: '16px',
      alignContent: 'center',
      flexGrow: 1,
      fontSize: '18px',
      fontFamily: 'Roboto'
    },
    school: {
      margin: '16px',
      alignContent: 'center',
      flexGrow: 1,
      fontSize: '16px',
      fontFamily: 'Lato'
    },
    name: {
      marginRight: '8px',
      fontSize: '18px',
      fontFamily: 'Lato',
      [theme.breakpoints.down('md')]: {
        marginTop: '55px',
        margin: '8px',
        fontSize: '20px',
        fontFamily: 'Roboto',
      },
    },
    toolbarDesktop:{
      display: 'flex',
      [theme.breakpoints.down('md')]: {
        display: 'none',
      },
    },
    toobarMobile: {
      display: 'none',
      [theme.breakpoints.down('md')]: {
        display: 'flex',
      },
    },
    drawer:{
      width: '250px',
    },
    blockBackground:{
      paddingTop: '18px',
      height: 'px',
      background: theme.palette.secondary.main
    },
    button:{
      width: '80%'
    }
  })
)

export default useStyles;