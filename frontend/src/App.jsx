import React, { useState } from 'react';

import './App.scss';
import TopNavigationBar from './components/TopNavigationBar';
import { ThemeProvider } from '@mui/material/styles';
import theme from './styles/createTheme';


function App() {

  return (
    <ThemeProvider theme={theme}>
        <header>
          <TopNavigationBar />
        </header>
        <body>
          <h1>Welcome to DIVI</h1>
        </body>
    </ThemeProvider>
  );
}

export default App;
