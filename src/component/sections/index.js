import React, { useState } from 'react';
import Conta from './Conta';

export default function Statessss() {

  const [visible, setVisible] = useState(false);
  const onClose = () => setVisible(!visible);
  
  return (
    <div>
      <Conta />
      {/* <Button onClick={onClose}>Abrir</Button> */}

    </div>
  )
}
