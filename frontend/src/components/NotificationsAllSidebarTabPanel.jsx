import React, { useState } from 'react';

import '../styles/NotificationsAll.scss';
import NotificationsAllSidebarTabPanelItem from './NotificationsAllSidebarTabPanelItem';
// import GroupsAllList from './GroupsAllList';

function NotificationsAllSidebarTabPanel(props) {
  const { value, notificationsData } = props;

  const archivedNotifications = notificationsData.filter(notification => notification.is_archived);
  const unArchivedNotifications = notificationsData.filter(notification => !notification.is_archived);

  return (
    <section className='notifications-sidebar-list'
      id={`tabpanel-${value}`}
    >
      {value === 0 ?
        (unArchivedNotifications.map(notification => (
          <NotificationsAllSidebarTabPanelItem key={notification.id} archive={value} notificationsData={notification} />
        ))) :
        (archivedNotifications.map(notification => (
          <NotificationsAllSidebarTabPanelItem key={notification.id} archive={value} notificationsData={notification} />
        )))
      }
    </section>
  );
}

export default NotificationsAllSidebarTabPanel;