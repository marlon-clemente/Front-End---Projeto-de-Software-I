import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';

const drawerWidth = 240;

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
    },
    menuButton: {
      marginRight: theme.spacing(2),
      [theme.breakpoints.up('sm')]: {
        display: 'none',
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