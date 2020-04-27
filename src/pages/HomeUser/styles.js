import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'block',
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