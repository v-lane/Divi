import React, { useState } from 'react';

import './App.scss';
import TopNavigationBar from './components/TopNavigationBar';
import SideNavigationBar from './components/SideNavigationBar';
import { ThemeProvider } from '@mui/material/styles';
import theme from './styles/createTheme';


function App() {

  return (
    <ThemeProvider theme={theme}>
      <header>
        <TopNavigationBar />
      </header>
      <body>
        <SideNavigationBar />
        <main>
          <h1>Welcome to DIVI</h1>
        </main>
      </body>
    </ThemeProvider>
  );
}

export default App;
