import React from 'react';

import { ThemeProvider } from '@material-ui/core/styles';
import './global.css';
import Theme from './Theme';
import Routes from './routes/routes';
import { AuthProvider } from './context/Auth';
function App() {
  return(
      <div>
        <AuthProvider>
        <ThemeProvider theme={Theme}>
            <Routes />
          </ThemeProvider>
        </AuthProvider>
      </div>
  );
}

export default App;
