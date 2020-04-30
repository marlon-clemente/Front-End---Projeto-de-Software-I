import { makeStyles } from '@material-ui/core/styles';

const widthMenu = 84;

const useStyles = makeStyles((theme) => ({
    root: {
        height: '100vh',
        backgroundColor: theme.palette.primary.main,
        display:'flex'
    },
    drawer:{
        height: 200,
        overflow: 'hidden',
        position: 'relative',
        border: '1px solid #ebedf0',
        borderRadius: '2px',
        padding: '48px',
        textAlignlign: 'center',
        background: '#fafafa',
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
        padding: '8px 8px',
        display: 'block',
        margin: 'auto',
        textDecoration: 'none',
        textAlign: 'center',
        fontFamily: 'Lato',
        fontSize: '16px',
        backgroundColor: '#ffffff',
        color: theme.palette.primary.main,
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