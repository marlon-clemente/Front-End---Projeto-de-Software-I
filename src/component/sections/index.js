import React from 'react';
import Paper from '@material-ui/core/Paper';
import Styles from './styles';
import { useSections } from '../../context/Sections';

import Conta from './Conta';
import EditProfile from './EditProfile';
import Sala from './Salas';
import Ajuda from './Ajuda';

export default function Section() {
  const classes = Styles();
  const { currentSections } = useSections();

  const section = (
    <div>
      { currentSections==='conta' ? (<Conta />) : (<></>)}
      { currentSections==='editprofile' ? (<EditProfile />) : (<></>)}
      { currentSections==='sala' ? (<Sala />) : (<></>)}
      { currentSections==='ajuda' ? (<Ajuda />) : (<></>)}
    </div>
  ) 
  
  return (
    <div className={classes.root}>
      <div 
        className={classes.content}
        component={Paper}
        elevation={6}
      >
        { section }
      </div>
    </div>
  )
}
