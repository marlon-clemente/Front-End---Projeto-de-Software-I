import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';

const drawerWidth = 240;

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      height: '100vh',
      [theme.breakpoints.down('md')]: {
        display:'block',
      },
    },
    content: {
      [theme.breakpoints.down('md')]: {
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
  }),
);

export default useStyles;