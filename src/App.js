import React from 'react';

import { ThemeProvider } from '@material-ui/core/styles';
import './global.css';
import Theme from './Theme';
import PublicRoutes from './routes/public';
import PrivateRoutes from './routes/private';

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
