import { createTheme } from '@mui/material/styles';
import { blueGrey } from '@mui/material/colors';

const theme = createTheme({
  palette: {
    primary_nav: {
      light: blueGrey[400],
      main: blueGrey[600],
      dark: blueGrey[800],
      contrastText: blueGrey[50],
    },
    launch: {
      main: '#015384'
    },
    launch_contrast: {
      main: '#72cff8'
    }
    // secondary: {
    //   light: '#ff7961',
    //   main: '#f44336',
    //   dark: '#ba000d',
    //   contrastText: '#000',
    // },
  },
  



});

// To override default styles, use theme heading
// - primary
// - secondary
// - error
// - warning
// - info
// - success

// theme must only contain four colour tokens:
// - main (main shade of color)
// - light (lighter shade of main)
// - dark (darker shade of main)
// - contrastText (text color, intended to contrast with main)

export default theme