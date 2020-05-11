import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';

const drawerWidth = 240;

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
    },
    imput: {
      width: '100%',
    },
    button: {
      width: '100%',
      margin: theme.spacing(2),
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
    
    // necessary for content to be below app bar
    toolbar: theme.mixins.toolbar,
    appBarSpacer: theme.mixins.toolbar,
    drawerPaper: {
      width: drawerWidth,
    },
    content: {
      [theme.breakpoints.up('xs')]: {
        width:'360px',
      },
      flexGrow: 1,
      padding: theme.spacing(3),
    },
  }),
);

export default useStyles;