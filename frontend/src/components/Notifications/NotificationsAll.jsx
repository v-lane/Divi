import React, { useState } from 'react';

import '../../styles/NotificationsAll.scss';
// import GroupsAllList from './GroupsAllList';
import NotificationsAllSidebar from './NotificationsAllSidebar';
import NotificationsMain from './NotificationsMain';
import ButtonStandard from '../ButtonStandard';

const NotificationsAll = ({notifications}) => {
  const [activeTab, setActiveTab] = useState(0);
  const [fullView, setFullView] = useState(0)

  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue);
  };

  return (
    <>
      <h1>All Notifications</h1>
      <section className='notifications-body'>
        <NotificationsAllSidebar activeTab={activeTab} handleTabChange={handleTabChange} userNotificationsData={notifications} setFullView={setFullView} fullView={fullView}/>
        <NotificationsMain activeTab={activeTab} fullView={fullView} userNotificationsData={notifications}/>
      </section>
      <footer className='notifications-footer'>
        <ButtonStandard buttonName={'Archive'} userNotificationsData={notifications}/>
      </footer>
    </>
  );
};

export default NotificationsAll;