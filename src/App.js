import React from 'react';

import { ThemeProvider } from '@material-ui/core/styles';
import './global.css';
import Theme from './Theme';

import Routes from './routes';

function App() {
  return(
      <div>
        <ThemeProvider theme={Theme}>
          <Routes />
        </ThemeProvider>
      </div>
  );
}

export default App;
