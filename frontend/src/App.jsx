import React, { useState } from 'react';

import './App.scss';
import TopNavigationBar from './components/TopNavigationBar';
import SideNavigationBar from './components/SideNavigationBar';
import ThreeSectionBody from './routes/ThreeSectionBody';
import ModalView from './routes/ModalView';
import theme from './styles/createTheme';

import { ThemeProvider } from '@mui/material/styles';


//// MOCK DATA
import userProfileData from './mock_data/userProfileData'

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
        {modalView && <ModalView handleClick={handleClick} userProfileData={userProfileData}/>}
      </main>
    </ThemeProvider>
  );
}

export default App;
