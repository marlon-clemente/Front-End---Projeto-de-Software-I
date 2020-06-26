import React from 'react';
import Styles from './styles';
import AppBar from './appBar';
import Body from './body';

export default function HomePage() {
  const classes = Styles();
  return(
    <div className={classes.root}><div className={classes.content}>
      <AppBar />
      <sections>
        <Body />
      </sections>
    </div></div>
  );
}