import { makeStyles } from '@material-ui/core/styles';

const widthMenu = 84;

const useStyles = makeStyles((theme) => ({
    root: {
        height: '100vh',
        backgroundColor: theme.palette.primary.main,
    },
    ul: {
        listStyleType: 'nome',
        margin: 0,
        padding: 0,
        width: widthMenu,
        overflow: 'auto',
        
    },
    listItem: {
        padding: '8px 8px',
        display: 'block',
        margin: 'auto',
        color: '#ffffff',
        textDecoration: 'none',
        textAlign: 'center',
        fontFamily: 'Lato',
        fontSize: '16px',
    },
    listItem_active:{
        padding: '8px 0px',
        margin: '0px',
        backgroundColor: '#ffffff',
        color: theme.palette.primary.main,
        '&:hover':{
            backgroundColor: '#ffffff',
            color: theme.palette.primary.main,
        },
    },
    versao: {
        flex: 0,
        color: '#ffffff',
        fontFamily: 'Arial',
        fontSize: '16px',
        textAlign: 'center'
    },
    button_box: {
        display: 'block',
        margin: 'auto',
        padding: '0px',
        textAlign: 'center',
    },
    icone: {
        fontSize: '30px',
        textAlign: 'center',
        margin: '0px',
        pading: '0px',
        //color: '#ffffff',
    },
    text: {
        textAlign: 'center',
        //color: '#ffffff',
        fontFamily: 'Arial',
        fontSize: '16px',
    },
  }));

  export default useStyles;