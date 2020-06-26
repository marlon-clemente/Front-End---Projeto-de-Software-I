import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'block',
      height: '100vh',
      backgroundColor: theme.palette.background.default,
    },
    content: {
      flexGrow: 1,
      padding: theme.spacing(3),
    },
    grid_user: {
        backgroundColor: theme.palette.secondary.main,
        margin: 0,
        textAlign: 'center'
    },
    grid_msg: {
        margin:0
    },
    fab: {
      position: 'absolute',
      bottom: theme.spacing(2),
      right: theme.spacing(2),
    },
    load:{
      textAlign: 'center',
      fontSize: 20,
      fontFamily: 'Lato',
      color: theme.palette.text.secondary
    },
  }),
);

export default useStyles;