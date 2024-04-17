import React, { useState } from 'react';

import '../styles/NotificationsAll.scss';
// import GroupsAllList from './GroupsAllList';
import NotificationsAllSidebarTabPanel from './NotificationsAllSidebarTabPanel';

import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';


const NotificationsAllSidebar = (props) => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue);
  };

  return (
    <aside className='notifications-sidebar'>
      <Tabs value={activeTab} onChange={handleTabChange}>
        <Tab className="tab" label="Inbox"/>
        <Tab className="tab" label="Archive" />
      </Tabs>
      <NotificationsAllSidebarTabPanel value={activeTab} index={0} />
      <NotificationsAllSidebarTabPanel value={activeTab} index={1} />
    </aside>
  );
};

export default NotificationsAllSidebar;