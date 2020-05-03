import React from 'react';
import Header from '../componentes/header';
import Divider from '@material-ui/core/Divider';
// import Alert from '@material-ui/lab/Alert';
// import AlertTitle from '@material-ui/lab/Alert';
// import loginApp from '../../../firebase';

export default function Security() {
  // const [alertEmailConfirm, setAlertEmailConfirm] = useState((<></>));
  // const user = loginApp.auth().currentUser;

  return (
    <div>
      <Header title="Segurança" returnTo="conta"/>
      <Divider/>
      
    </div>
  )
}
