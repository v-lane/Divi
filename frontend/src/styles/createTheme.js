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
    // secondary: {
    //   light: '#ff7961',
    //   main: '#f44336',
    //   dark: '#ba000d',
    //   contrastText: '#000',
    // },
  },
});

export default theme