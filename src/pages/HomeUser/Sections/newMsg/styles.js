import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    layout: {
      width: 'auto',
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
    
  }),
);

export default useStyles;