import React from 'react';

import { ThemeProvider } from '@material-ui/core/styles';
import './global.css';
import Theme from './Theme';
import PublicRoutes from './routes/routes';

function App() {
  return(
      <div>
        <ThemeProvider theme={Theme}>
          <PublicRoutes />
        </ThemeProvider>
      </div>
  );
}

export default App;
