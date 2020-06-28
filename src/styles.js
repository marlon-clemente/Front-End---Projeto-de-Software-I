import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';

const drawerWidth = 240;

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      display: 'flex',
      height: '100vh',
      backgroundColor: theme.palette.background.default,
      [theme.breakpoints.down('sm')]: {
        display:'block',
      },
    },
    content: {
      [theme.breakpoints.down('sm')]: {
        margin: 0, 
        flexGrow:0,
      },
      flexGrow: 1,
      // height: '100vh',
      padding: theme.spacing(3),
    },
    paper: {
      display: 'flex',
      flexWrap: 'wrap',
      '& > *': {
        margin: theme.spacing(2),
        width: "100%",
        height: theme.spacing(4),
      },
    },
    color:{
      backgroundColor:'red',
    },
    fab: {
      position: 'absolute',
      bottom: theme.spacing(2),
      right: theme.spacing(2),
    },
    // necessary for content to be below app bar
    toolbar: theme.mixins.toolbar,
    appBarSpacer: theme.mixins.toolbar,
    drawerPaper: {
      width: drawerWidth,
    },
    graphs: {
      maxWidth: '85vw',
      position: 'absolute',
      left: 150,
      top: 120
    },
    infoPaper: {
      '&:hover': {
        opacity: 0.8,
        cursor: 'pointer',
        boxShadow: '3px 4px #336666'
      }
    }
  }),
);

export default useStyles;