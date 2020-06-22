import React, { useState, useContext } from 'react'
import { NavLink } from 'react-router-dom';
import List from '@material-ui/core/List';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import Drawer from '@material-ui/core/Drawer';
import Collapse from '@material-ui/core/Collapse';
import Typography from '@material-ui/core/Typography';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';

//icons
import AccountCircleOutlinedIcon from '@material-ui/icons/AccountCircleOutlined';
import DashboardOutlinedIcon from '@material-ui/icons/DashboardOutlined';
import EmailOutlinedIcon from '@material-ui/icons/EmailOutlined';
import MeetingRoomOutlinedIcon from '@material-ui/icons/MeetingRoomOutlined';
import SyncProblemIcon from '@material-ui/icons/SyncProblem';
import HelpOutlineOutlinedIcon from '@material-ui/icons/HelpOutlineOutlined';
import MenuIcon from '@material-ui/icons/Menu';
import Logo from '../../assets/logo-white.png'
import SchoolIcon from '@material-ui/icons/School';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import StarBorder from '@material-ui/icons/StarBorder';
import SecurityIcon from '@material-ui/icons/Security';

import Styles from './styles';
import CompSections from '../sections'
import { useSections } from '../../context/Sections';
import DataContext from '../../context/Data';

export default function AppBarLeft(props) {
    const classes = Styles();
    const { handleLogout, school, loggedUser } = useContext(DataContext);
    const [menuSection, setMenuSection] = useState("off");
    const { setCurrentSections } = useSections();
    const [drawer, setDrawer] = useState(false);
    const [mobMenuOpen, setMobMenuOpen] = useState(false)

    const handleClickExpandeMenu = () =>{
        setMobMenuOpen(!mobMenuOpen);
    }

    const handleActiveMenuConta = () => {
        setMenuSection('conta');
        setCurrentSections("conta");
    }
    const handleActiveMenuSala = () => {
        setMenuSection('sala');
        setCurrentSections("sala");
    }
    const handleActiveMenuAjuda = () => {
        setMenuSection('ajuda');
        setCurrentSections("ajuda");
    }

    const handleOffActive = () => {
        setMenuSection("off");
    }

    const toggleDrawer = () => {
        setDrawer(true);
    };

    const handleDrawerClose = () => {
        setDrawer(false);
    }


    return (
        <div className={classes.root}><div className={classes.menuWeb}>
            <List component="nav" className={classes.ul}
                aria-label="main mailbox folders">
                <div className={classes.listItem}>
                    <img src={Logo} className={classes.logo} />
                    <div className={classes.text}>SISGEPE</div>
                </div>
                <Divider />
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

                <NavLink exact activeClassName={classes.listItem_active}
                    className={classes.listItem} to="/caixa_entrada">
                    <EmailOutlinedIcon className={classes.icone} />
                    <div className={classes.text}>Caixa de <br/>Entrada</div>
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

                {menuSection === 'sala' ? (
                    <div onClick={handleOffActive}
                        className={classes.listItem_active}
                    >
                        <MeetingRoomOutlinedIcon className={classes.icone} />
                        <div className={classes.text}>Salas</div>
                    </div>
                ) : (
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
                    ) : (
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
                        <IconButton edge="start" onClick={toggleDrawer}
                            color="inherit" aria-label="menu"><MenuIcon />
                        </IconButton><Typography variant="h6"
                            className={classes.title}>{props.title}
                        </Typography><Button color="inherit"
                            className={classes.buttonLogOut} onClick={handleLogout} >Sair</Button>
                    </Toolbar>
                </AppBar>
            </div>

            <Drawer anchor="left" open={drawer} onEscapeKeyDown={handleDrawerClose}
                onBackdropClick={handleDrawerClose}>
                <div className={classes.drawer}>
                    <div className={classes.box_school}>
                        <img src={Logo} className={classes.logo}/>
                        <div className={classes.info}>
                            <AccountCircleOutlinedIcon className={classes.icon_text}/>
                            <Typography className={classes.name_user}> {loggedUser.username}</Typography>
                        </div>
                        <div className={classes.info}>
                            <SchoolIcon className={classes.icon_text}/>
                            <Typography className={classes.name_school}> {school.id_hash}</Typography>
                        </div>
                    </div>

                    <List component="nav" aria-label="main mailbox folders">
                      <ListItem button component="a" href="/dashboard"> 
                        <ListItemIcon><DashboardOutlinedIcon /></ListItemIcon>
                        <ListItemText primary="Dashboard" />
                      </ListItem>
                      <ListItem button component="a" href="/caixa_entrada"> 
                        <ListItemIcon><EmailOutlinedIcon /></ListItemIcon>
                        <ListItemText primary="Caixa de Entrada" />
                      </ListItem>
                      <ListItem button component="a" href="/problemas"> 
                        <ListItemIcon><SyncProblemIcon /></ListItemIcon>
                        <ListItemText primary="Análises" />
                      </ListItem>
                      <ListItem button component="a" href="/#"> 
                        <ListItemIcon><MeetingRoomOutlinedIcon /></ListItemIcon>
                        <ListItemText primary="Salas" />
                      </ListItem>
                    </List>
                    <Divider/>
                    <List component="nav" aria-label="main mailbox folders">
                      <ListItem button onClick={handleClickExpandeMenu}> 
                        <ListItemIcon><AccountCircleOutlinedIcon /></ListItemIcon>
                        <ListItemText primary="Conta" />
                        {mobMenuOpen ? <ExpandLess /> : <ExpandMore />}
                      </ListItem>
                      <Collapse in={mobMenuOpen} timeout="auto" unmountOnExit>
                        <List component="div" disablePadding>
                            <ListItem button component="a" href="/#" className={classes.nested}>
                                <ListItemIcon><StarBorder /></ListItemIcon>
                                <ListItemText primary="Configurações Escolares" />
                            </ListItem>
                            <ListItem button component="a" href="/change_user" className={classes.nested}>
                                <ListItemIcon><SecurityIcon /></ListItemIcon>
                                <ListItemText primary="Configurações de Usuário e Segurança" />
                            </ListItem>
                        </List>
                      </Collapse>
                      <ListItem button component="a" href="/#"> 
                        <ListItemIcon><HelpOutlineOutlinedIcon /></ListItemIcon>
                        <ListItemText primary="Ajuda" />
                      </ListItem>
                    </List>

                </div>
            </Drawer>

            {menuSection !== 'off' ? (<CompSections />) : (<></>)}
        </div>
    )
}
