import React from 'react'
import Fab from '@material-ui/core/Fab';
import AddCommentIcon from '@material-ui/icons/AddComment';

import Styles from './styles';

var msg = [];
function semMsg(){
  return(
    <h1>Sem Mensagen Aki</h1>  
  )
}
export default function BoxMsg() {
  const classes = Styles();
  return (
    <div className={classes.root}>
      <Fab color="secondary" className={classes.fab}
        aria-label="add">
          {
            msg.length === 0 ? semMsg : semMsg
          }
        <AddCommentIcon />
      </Fab>
    </div>
  )
}
