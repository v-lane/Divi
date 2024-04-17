import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useNavigate, useLocation } from "react-router-dom";
import axios from 'axios';


import './App.scss';
import TopNavigationBar from './components/TopNavigationBar';
import SideNavigationBar from './components/SideNavigationBar';
import ThreeSectionBody from './routes/ThreeSectionBody';
import ModalView from './routes/ModalView';
import theme from './styles/createTheme';

import { ThemeProvider } from '@mui/material/styles';

import useModalView from './hooks/useModalView';
import UserProfile from './components/modals/UserProfile';
import CreateGroupForm from './components/modals/CreateGroupForm';


function App() {
  const navigate = useNavigate();
  const location = useLocation();
  const background = location.state && location.state.background;
  const [user, setUser] = useState(null);
  const [group, setGroup] = useState([]);
  const [transactions, setTransactions] = useState([]);
  const { profileView, newGroupView, setProfileView, setNewGroupView, closeModal, openModal } = useModalView();
  // const [profileView, setProfileView] = useState(true);
  // const [newGroupView, setNewGroupView] = useState(false);
  const [memberTransactions, setMemberTransactions] = useState([])

  const handleClick = (() => {
    navigate(-1);
    closeModal();
  });

  // temp userid (to be replaced by cookies)
  const userId = 1;

  // fetch user data
  useEffect(() => {
    axios
      .get(`/api/users/${userId}`)
      .then((res) => res.data)
      .then(setUser);
  }, []);

  // fetch user groups data
  useEffect(() => {
    axios
      .get(`/api/groups/${userId}`)
      .then((res) => setGroup(res.data));
  }, []);

  // fetch transaction data for a specific user
  useEffect(() => {
    axios
    .get(`/api/transactions/${userId}`)
    .then((res) => setTransactions(res.data))
  }, [])

  // fetch member transaction data for a specific user
  useEffect(() => {
    axios
    .get(`/api/member_transactions/${userId}`)
    .then((res) => setMemberTransactions(res.data))
  }, [])


  return (
    <div className='App'>
      <ThemeProvider theme={theme}>
        <header>
          <TopNavigationBar location={background || location} />
        </header>
        <main>
          <SideNavigationBar location={background || location} openModal={openModal} />
          <Routes location={background || location}>
            <Route path='/' element={<ThreeSectionBody user={user} memberTransactions={memberTransactions} transactionData={transactions} userGroups={group} openModal={openModal} />} >
              <Route element={<ModalView />} >
                <Route path='profile' element={<UserProfile />} />
                <Route path='new-group' element={<CreateGroupForm />} />
              </Route>
            </Route>
          </Routes>
          {background && (
            <Routes>
              <Route element={<ModalView handleClick={handleClick} userProfileData={user} useModalView={{ profileView, newGroupView, closeModal }} />} >
                <Route path='profile' element={<UserProfile />} />
                <Route path='new-group' element={<CreateGroupForm />} />
              </Route>

            </Routes>
          )}
        </main>
      </ThemeProvider>
    </div>
  );
}

export default App;
