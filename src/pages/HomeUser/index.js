import React from 'react';
import AppBar from '../../component/AppBarUser';
import Styles from './styles';
import Fab from '@material-ui/core/Fab';
import AddCommentIcon from '@material-ui/icons/AddComment';


import { useSections } from '../../context/Sections';
import NewMsg from './Sections/newMsg';
import Switcher from './Sections';

export default function Home(props) {  
  const classes = Styles();
  const { currentSections, setCurrentSections } = useSections();

  const handleFab = () => {
      setCurrentSections("newMsg");
  }

  return (
    <div className={classes.root}><AppBar/><div
      className={classes.content}>
      {currentSections==='newMsg' ? (<NewMsg />) : (< Switcher/>)}
      {currentSections !== 'newMsg' ? (
        <Fab color="secondary"
            className={classes.fab} onClick={handleFab}
            aria-label="add"><AddCommentIcon />
        </Fab>
      ) : (
        <></>
      )} 
    </div></div>
    )
}



