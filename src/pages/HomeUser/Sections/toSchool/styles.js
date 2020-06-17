import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'block',
      [theme.breakpoints.up('sm')]: {
        width: '100%',
        margin: 'auto',
      },
      [theme.breakpoints.up('md')]: {
        width: '80%',
        margin: 'auto',
      },
      [theme.breakpoints.up('lg')]: {
        width: '50%',
        margin: 'auto',
      },
      fontFamily: 'Lato',
      textAlign: 'center'
    },
    button:{
      alignItems: 'center',
      marginTop: '8px',
      width: '100%'
    },
    logo: {
      width: '100px',
    }
  }),
);

export default useStyles;