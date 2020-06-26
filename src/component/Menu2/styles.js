import { makeStyles } from '@material-ui/core/styles';

const widthMenu = 90;

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        backgroundColor: theme.palette.primary.main,
        // overflow: 'auto',
    },
    logo:{
        marginTop: '2px',
        marginBottom: '8px',
        height: '24px',
        [theme.breakpoints.down('md')]: {
            height: '36px',
            margin: 12
        },
    },
    logo_txt:{
        fontFamily: 'Lato',
        fontWeight: 600
    },  
    menuWeb:{
        [theme.breakpoints.down('md')]: {
            display: 'none',
        },
    },
    menuMobile:{
        flexGrow: 1,
        [theme.breakpoints.up('lg')]: {
            display: 'none',
        },
    },
    drawer:{
        height: 200,
        overflow: 'hidden',
        position: 'relative',
        border: '1px solid `${theme.palette.background.default}`',
        borderRadius: '2px',
        padding: '48px',
        textAlignlign: 'center',
        background: theme.palette.background.default,
    },
    ul: { //lista
        listStyleType: 'nome',
        margin: 0,
        padding: 0,
        width: widthMenu,
        overflow: 'auto',
        cursor:'pointer'
    },
    listItem: {
        padding: '8px 8px',
        display: 'block',
        margin: 'auto',
        color: theme.palette.background.default,
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
        backgroundColor: theme.palette.background.default,
        color: theme.palette.primary.main,
    },
    listItem_activeCount:{
        padding: '8px 8px',
        display: 'block',
        margin: 'auto',
        textDecoration: 'none',
        textAlign: 'center',
        fontFamily: 'Lato',
        fontSize: '16px',
        backgroundColor: theme.palette.background.paper,
        color: theme.palette.primary.main,
    },
    icone: {
        fontSize: '30px',
        textAlign: 'center',
        margin: '0px',
        pading: '0px',
    },
    text: {
        textAlign: 'center',
        fontFamily: 'Arial',
        fontSize: '16px',
    },
    // Mobile
    title:{
        flexGrow: 1,
    },
    buttonLogOut: {
        marginRight: theme.spacing(2),
    },
    appbar: {
        width: '100%',
    },
    drawer:{
        position: 'relative',
        display: 'block',
        width: '50vh',
        [theme.breakpoints.down('xs')]: {
            width: '40vh',
        },

    },
    box_school:{
        backgroundColor: theme.palette.primary.main,
        paddingBottom: 8
    },
    list:{
        color: theme.palette.primary.main,
        width: '100%',
        maxWidth: 360,
        backgroundColor: theme.palette.background.default,
    },
    info:{
        display: 'flex',
        verticalAlign: 'center',
        color: theme.palette.background.default,
        alignContent: 'center',
        marginBottom: 12
    },
    icon_text:{
        marginLeft: 12,
        marginRight: 12,
        margin: 'auto'
    },
    name_user:{
        fontFamily:'Lato',
        fontSize: 24,
        alignContent: 'center',
    },
    name_school:{
        fontFamily:'Roboto',
        fontSize: 18,
        alignContent: 'center',
    },
    nested: {
        paddingLeft: theme.spacing(4),
    },
  }));

  export default useStyles;