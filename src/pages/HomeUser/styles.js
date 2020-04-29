import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'block',
    },
    content: {
      flexGrow: 1,
      height: '100vh',
      padding: theme.spacing(3),
    },
    grid_user: {
        backgroundColor: theme.palette.secondary.main,
        margin: 0,
        textAlign: 'center'
    },
    grid_msg: {
        margin:0
    }
  }),
);

export default useStyles;