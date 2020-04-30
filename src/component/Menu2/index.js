import React, {useState} from 'react'
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
import Sections from '../sections/Conta';
export default function AppBarLeft() {
    const classes = Styles();

    const [secao, setSecao] = useState(false);
    const handleSection = () =>{
        setSecao(!secao);
    }

    return (
    <div className={classes.root}>
        <List component="nav" className={classes.ul} aria-label="main mailbox folders">
            {
                secao ? (
                    <div
                        onClick={handleSection}
                        className={classes.listItem_active}
                        >
                        <AccountCircleOutlinedIcon className={classes.icone} />
                        <div className={classes.text}>Conta</div>
                    </div>
                ) : (
                    <div
                        onClick={handleSection}
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

        {
            secao ? (<Sections />) : (<></>)
        }

    </div>
    )
}
