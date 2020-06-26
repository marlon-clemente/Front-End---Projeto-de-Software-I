import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      backgroundColor: theme.palette.background.default,
      [theme.breakpoints.down('md')]: {
        display:'block',
      },
    },
    content: {
      [theme.breakpoints.down('md')]: {
        margin: 0, 
        flexGrow:0,
        height:'auto'
      },
      flexGrow: 1,
      height: '100vh',
      overflow: 'auto'
    },
  }),
);

export default useStyles;