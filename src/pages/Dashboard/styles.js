import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      backgroundColor: theme.palette.background.default,
      [theme.breakpoints.down('md')]: {
        display:'block',
        height: 'auto'
      },
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
    content: {
      [theme.breakpoints.down('md')]: {
        margin: 0,
        flexGrow:0,
      },
      padding: theme.spacing(3),
      paddingBottom: 0,
      paddingTop: 0,
      flexGrow: 1,
      height: '100vh',
      overflow: 'auto'
    },
    paper_graphs_pizza:{
      display: 'flex',
      [theme.breakpoints.down('md')]: {
        display: 'block',
      },
    },
    graphs: {
      maxWidth: '85vw',
      backgroundColor: 'red'
    },
    infoPaper: {
      marginTop: 12,
      '&:hover': {
        opacity: 0.8,
        cursor: 'pointer',
        boxShadow: '3px 4px #336666'
      }
    }
  }),
);

export default useStyles;