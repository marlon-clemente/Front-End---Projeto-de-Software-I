import { createMuiTheme } from '@material-ui/core/styles';

const ThemeGreen = createMuiTheme({
  palette: {
    primary: {
      main: "#336666",
    },
    secondary: {
      main: "#2A3261",
    }
  },

  typography: {
    fontFamily: 'Lato, Roboto',
  },
  
  breakpoints: {
    values: {
      xs: 360,
      sm: 450,
      md: 600,
      lg: 900,
      xl: 1200
    }
  }
});

export default ThemeGreen;