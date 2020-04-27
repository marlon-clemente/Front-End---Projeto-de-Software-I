import React from 'react'
import { NavLink } from 'react-router-dom';
import List from '@material-ui/core/List';
//icons
import AccountCircleOutlinedIcon from '@material-ui/icons/AccountCircleOutlined';
import DashboardOutlinedIcon from '@material-ui/icons/DashboardOutlined';
import EmailOutlinedIcon from '@material-ui/icons/EmailOutlined';
import MeetingRoomOutlinedIcon from '@material-ui/icons/MeetingRoomOutlined';
import SyncProblemIcon from '@material-ui/icons/SyncProblem';
import HelpOutlineOutlinedIcon from '@material-ui/icons/HelpOutlineOutlined';
import Styles from './styles';

export default function AppBarLeft() {
    const classes = Styles();

    return (
    <div className={classes.root}>
        <List component="nav" className={classes.ul} aria-label="main mailbox folders">
            
            <NavLink
                exact
                activeClassName={classes.listItem_active}
                className={classes.listItem}
                to="/conta"
                >
                <AccountCircleOutlinedIcon className={classes.icone} />
                <div className={classes.text}>Conta</div>
            </NavLink>

            <NavLink
                exact
                activeClassName={classes.listItem_active}
                className={classes.listItem}
                to="/"
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
    )
}
