import React from 'react';

import '../../styles/NotificationsAll.scss';
import NotificationsAllSidebarTabPanelItem from './NotificationsAllSidebarTabPanelItem';

function NotificationsAllSidebarTabPanel(props) {
  const { value, notificationsData, setFullView, fullView } = props;

  const archivedNotifications = notificationsData.filter(notification => notification.is_archived);
  const unArchivedNotifications = notificationsData.filter(notification => !notification.is_archived);

  return (
    <section className='notifications-sidebar-list'
      id={`tabpanel-${value}`}
    >
      {value === 0 ?
        (unArchivedNotifications.map(notification => (
          <NotificationsAllSidebarTabPanelItem key={notification.id} archive={value} notificationsData={notification} setFullView={setFullView} fullView={fullView}/>
        ))) :
        (archivedNotifications.map(notification => (
          <NotificationsAllSidebarTabPanelItem key={notification.id} archive={value} notificationsData={notification} setFullView={setFullView} fullView={fullView}/>
        )))
      }
    </section>
  );
}

export default NotificationsAllSidebarTabPanel;