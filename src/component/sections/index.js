import React, { useState } from 'react';
import Conta from './Conta';

export default function Section(props) {

  if (props.section === "conta"){
    return (
       <div>
      <Conta />
    </div>
    );
  }
  return (
    <></>
  )
}
