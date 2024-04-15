import React, { useState } from 'react';

import './App.scss';
import TopNavigationBar from './components/TopNavigationBar';
import SideNavigationBar from './components/SideNavigationBar';
import ThreeSectionBody from './components/ThreeSectionBody';
import ModalView from './components/ModalView';
import theme from './styles/createTheme';

import { ThemeProvider } from '@mui/material/styles';

function App() {
  const [modalView, setModalView] = useState(true)

  const handleClick = (() => {
    setModalView(false);
  })

  return (
    <ThemeProvider theme={theme}>
      <header>
        <TopNavigationBar />
      </header>
      <main>
        <SideNavigationBar />
        <ThreeSectionBody />
        {modalView && <ModalView handleClick={handleClick}/>}
      </main>
    </ThemeProvider>
  );
}

export default App;
