import React from 'react';

import { ThemeProvider } from '@material-ui/core/styles';
import './global.css';
import Theme from './Theme';
import Routes from './routes/routes';
import { AuthProvider } from './context/Auth';
import { SectionsProvider } from './context/Sections';

function App() {
  return(
      <div>
        <SectionsProvider>
          <AuthProvider>
            <ThemeProvider theme={Theme}>
              <Routes />
            </ThemeProvider>
          </AuthProvider>
        </SectionsProvider>
      </div>
  );
}

export default App;
