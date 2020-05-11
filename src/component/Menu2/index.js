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
    const [menuSection, setMenuSection] = useState("off");
    const {setCurrentSections} = useSections();
    
    const handleActiveMenuConta = () =>{
        setMenuSection('conta');
        setCurrentSections("conta");
    }
    const handleActiveMenuSala = () =>{
        setMenuSection('sala');
        setCurrentSections("sala");
    }

    const handleActiveMenuAjuda = () =>{
        setMenuSection('ajuda');
        setCurrentSections("ajuda");
    }

    const handleOffActive = () =>{
        setMenuSection("off");
    }

    return (
    <div className={classes.root}><div className={classes.menuWeb}>
      <List component="nav" className={classes.ul}
          aria-label="main mailbox folders">
            {
                menuSection === 'conta' ? (
                    <div
                        onClick={handleOffActive}
                        className={classes.listItem_active}
                        >
                        <AccountCircleOutlinedIcon className={classes.icone} />
                        <div className={classes.text}>Conta</div>
                    </div>
                    
                ) : (
                    <div
                        onClick={handleActiveMenuConta}
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
            
            {menuSection ==='sala' ? (
                <div onClick={handleOffActive}
                    className={classes.listItem_active}
                >
                    <MeetingRoomOutlinedIcon className={classes.icone} />
                    <div className={classes.text}>Salas</div>
                </div>
            ):(
                <div className={classes.listItem}
                    onClick={handleActiveMenuSala}
                >
                    <MeetingRoomOutlinedIcon className={classes.icone} />
                    <div className={classes.text}>Salas</div>
                </div>
            )}
            
            {
                menuSection === 'ajuda' ? (
                    <div
                    onClick={handleOffActive}
                    className={classes.listItem_active}
                    >
                       <HelpOutlineOutlinedIcon className={classes.icone} />
                        <div className={classes.text}>Ajuda</div> 
                    </div>
                ):(
                    <div
                    onClick={handleActiveMenuAjuda}
                    className={classes.listItem}
                    >
                       <HelpOutlineOutlinedIcon className={classes.icone} />
                        <div className={classes.text}>Ajuda</div> 
                    </div>
                )
            }
        </List>

        </div>

        {/* MENU MOB  */}
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

        {menuSection !== 'off' ? (<CompSections />) : (<></>)}
    </div>
    )
}
