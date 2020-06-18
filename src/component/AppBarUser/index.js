import React, { useContext, useState, useEffect } from 'react';
import AppBar from '@material-ui/core/AppBar';
import MenuIcon from '@material-ui/icons/Menu';
import Button from '@material-ui/core/Button';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Avatar from '@material-ui/core/Avatar';
import Box from '@material-ui/core/Box';
import MenuItem from '@material-ui/core/MenuItem';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Menu from '@material-ui/core/Menu';
import Drawer from '@material-ui/core/Drawer';
import Logo from '../../assets/logo-white.png';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import DataContext from '../../context/Data';
import Styles from './styles';
import clsx from 'clsx';

export default function MenuAppBar() {
  const classes = Styles();
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const [drawer, setDrawer] = useState(false);

  const [response, setResponse] = useState({});
  const [schoolIdHash, setSchoolIdHash] = useState();
  const {
    loggedUser,
    handleLogout,
    picture,
    subscribeUserToSchool,
    getAuthUserSchool,
    school
  } = useContext(DataContext);

  useEffect(() => {
    getAuthUserSchool((res, error) => {
      if (error)
        setResponse({ type: 'error', error});
    });
  }, [])

  const toggleDrawer = ()=>{
    setDrawer(true);
  };

  const handleDrawerClose = ()=>{
    setDrawer(false);
  }

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <div className={classes.root}>
      <meta name="theme-color" content="#2A3261"/>
      <AppBar color="secondary" position="static">
        <Toolbar className={classes.toolbarDesktop}>
          <img src={Logo} className={classes.logo}/>
          <Typography className={classes.title}>
            SISGEPE
          </Typography>
          <Typography variant="h6" className={classes.title}>
            {school.social_reason} | {school.id_hash}
          </Typography>
          <IconButton
            aria-label="account of current user" aria-controls="menu-appbar"
            aria-haspopup="true" onClick={handleMenu} color="inherit">
            <Avatar src={picture} className={classes.avatar}>MC</Avatar>
            <Typography variant="h6" className={classes.name}>
              { loggedUser.username }
            </Typography>
            <ExpandMoreIcon/>
          </IconButton>          
          <Menu id="menu-appbar" anchorEl={anchorEl}
            anchorOrigin={{
              vertical: 'top', horizontal: 'right'}}
            keepMounted
            transformOrigin={{vertical: 'top', horizontal: 'right'}}
            open={open}
            onClose={handleClose}>
            <MenuItem onClick={handleLogout}>Sair</MenuItem>
          </Menu>
        </Toolbar>

        <Toolbar className={classes.toobarMobile}>

        <IconButton edge="start" onClick={toggleDrawer}

          color="inherit" aria-label="menu">
          <MenuIcon />
        </IconButton>
        <div className={classes.marca}>
          <img src={Logo} className={classes.logo}/>
          <Typography className={classes.title}>
            SISGEPE
          </Typography>
        </div>
          <Drawer anchor="left" open={drawer}
            onEscapeKeyDown={handleDrawerClose}
            onBackdropClick={handleDrawerClose}>
            <div className={classes.drawer}><div 
              className={classes.blockBackground}>
                <Avatar src={picture} className={classes.avatar}>MC
              </Avatar></div>
              <Box textAlign="center">
                <Typography  className={classes.name}>
                  {loggedUser.username}
                </Typography>
                <Typography className={classes.school}>
                  {school.social_reason}
                </Typography>
                <Typography className={classes.school}>
                  {school.id_hash}
                </Typography>
                <Button className={classes.button}
                  onClick={handleLogout}
                  variant="contained" color="secondary"
                  disableElevation 
                >Sair</Button>
              </Box>
            </div>
          </Drawer>
        </Toolbar>
      </AppBar>
    </div>
  );
}
