import React from 'react'
import Styles from './styles';
import AddAPhotoIcon from '@material-ui/icons/AddAPhoto';

export default function ImputImg() {
  const classes = Styles();
  return (
    <div className={classes.layout}>
      <div className={classes.paper}>
        <AddAPhotoIcon className={classes.icon}/>
      </div>
    </div>
  )
}
