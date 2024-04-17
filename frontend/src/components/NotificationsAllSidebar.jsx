import React, { useState } from 'react';

import '../styles/NotificationsAll.scss';
// import GroupsAllList from './GroupsAllList';
import NotificationsAllSidebarTabPanel from './NotificationsAllSidebarTabPanel';

import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';


const NotificationsAllSidebar = (props) => {
  const { activeTab, handleTabChange, userNotificationsData, setFullView, fullView } = props;

  const archivedNotifications = userNotificationsData.filter(notification => notification.is_archived)
  const unArchivedNotifications = userNotificationsData.filter(notification => !notification.is_archived)

  return (
    <aside className='notifications-sidebar'>
      <Tabs value={activeTab} onChange={handleTabChange}>
        <Tab className="tab" label="Inbox" />
        <Tab className="tab" label="Archive" />
      </Tabs>
      <NotificationsAllSidebarTabPanel value={activeTab} notificationsData={userNotificationsData} archivedNotifications={archivedNotifications} unArchivedNotifications={unArchivedNotifications} setFullView={setFullView} fullView={fullView}/>
    </aside>
  );
};

export default NotificationsAllSidebar;