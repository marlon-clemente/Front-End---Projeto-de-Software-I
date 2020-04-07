import { createMuiTheme } from '@material-ui/core/styles';

const ThemeGreen = createMuiTheme({
  palette: {
    primary: {
      main: "#336666",
    },
  },
  breakpoints: {
    // Define custom breakpoint values.
    // These will apply to Material-UI components that use responsive
    // breakpoints, such as `Grid` and `Hidden`. You can also use the
    // theme breakpoint functions `up`, `down`, and `between` to create
    // media queries for these breakpoints
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