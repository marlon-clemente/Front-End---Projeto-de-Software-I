import React from 'react'
import BoxMsg from './boxMsg';
import BoxNoMsg from './boxNoMsg';

export default function Switcher() {
  var mensagens = [];

  return (
    <div>
      {mensagens.length > 0 ? (<BoxMsg/>) : (<BoxNoMsg/>) }
    </div>
  )
}
