import React, { useState } from 'react';

import './App.scss';
import TopNavigationBar from './components/TopNavigationBar';
import SideNavigationBar from './components/SideNavigationBar';
import { ThemeProvider } from '@mui/material/styles';
import theme from './styles/createTheme';
import ThreeSectionBody from './components/ThreeSectionBody';


function App() {

  return (
    <ThemeProvider theme={theme}>
      <header>
        <TopNavigationBar />
      </header>
      <main>
        <SideNavigationBar />
        <ThreeSectionBody />
      </main>
    </ThemeProvider>
  );
}

export default App;
