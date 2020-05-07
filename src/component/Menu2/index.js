import React, {useState} from 'react'
import { NavLink } from 'react-router-dom';
import List from '@material-ui/core/List';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
//icons
import AccountCircleOutlinedIcon from '@material-ui/icons/AccountCircleOutlined';
import DashboardOutlinedIcon from '@material-ui/icons/DashboardOutlined';
import EmailOutlinedIcon from '@material-ui/icons/EmailOutlined';
import MeetingRoomOutlinedIcon from '@material-ui/icons/MeetingRoomOutlined';
import SyncProblemIcon from '@material-ui/icons/SyncProblem';
import HelpOutlineOutlinedIcon from '@material-ui/icons/HelpOutlineOutlined';
import MenuIcon from '@material-ui/icons/Menu';

import Styles from './styles';
import CompSections from '../sections'
import { useSections } from '../../context/Sections';

export default function AppBarLeft(props) {
    const classes = Styles();
    const [menuSection, setMenuSection] = useState(false);
    const {setCurrentSections} = useSections();
    
    const handleActiveSection = () =>{
        setMenuSection(!menuSection);
        setCurrentSections("conta");
    }
    return (
    <div className={classes.root}>
        <div className={classes.menuWeb}>
            <List component="nav" className={classes.ul} aria-label="main mailbox folders">
            {
                menuSection ? (
                    <div
                        onClick={handleActiveSection}
                        className={classes.listItem_active}
                        >
                        <AccountCircleOutlinedIcon className={classes.icone} />
                        <div className={classes.text}>Conta</div>
                    </div>
                ) : (
                    <div
                        onClick={handleActiveSection}
                        className={classes.listItem}
                        >
                        <AccountCircleOutlinedIcon className={classes.icone} />
                        <div className={classes.text}>Conta</div>
                    </div>
                )
            }

            <NavLink
                exact
                activeClassName={classes.listItem_active}
                className={classes.listItem}
                to="/dashboard"
                >
                <DashboardOutlinedIcon className={classes.icone} />
                <div className={classes.text}>Início</div>
            </NavLink>
            
            <NavLink
                exact
                activeClassName={classes.listItem_active}
                className={classes.listItem}
                to="/caixa_entrada"
                >
                <EmailOutlinedIcon className={classes.icone} />
                <div className={classes.text}>Caixa de Entrada</div>
            </NavLink>

            <NavLink
                exact
                activeClassName={classes.listItem_active}
                className={classes.listItem}
                to="/problemas"
                >
                <SyncProblemIcon className={classes.icone} />
                <div className={classes.text}>Análises</div>
            </NavLink>

            <NavLink
                exact
                activeClassName={classes.listItem_active}
                className={classes.listItem}
                to="/salas"
                >
                <MeetingRoomOutlinedIcon className={classes.icone} />
                <div className={classes.text}>Salas</div>
            </NavLink>

            <NavLink
                exact
                activeClassName={classes.listItem_active}
                className={classes.listItem}
                to="/ajuda"
                >
                <HelpOutlineOutlinedIcon className={classes.icone} />
                <div className={classes.text}>Ajuda</div>
            </NavLink>
        </List>

        </div>
        <div className={classes.menuMobile}>
            <AppBar position="static">
              <Toolbar>
                <IconButton edge="start" 
                color="inherit" aria-label="menu"><MenuIcon />
                </IconButton><Typography variant="h6"
                className={classes.title}>{props.title}
                </Typography><Button color="inherit"
                className={classes.buttonLogOut}>Sair</Button>
              </Toolbar>
            </AppBar>
        </div>
        {
            menuSection ? (<CompSections />) : (<></>)
        }
    </div>
    )
}
