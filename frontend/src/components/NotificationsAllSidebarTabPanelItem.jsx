import React, { useState } from 'react';

import '../styles/NotificationsAll.scss';
import { format } from 'date-fns';


function NotificationsAllSidebarTabPanelItem({ archive, notificationsData }) {

  if(notificationsData.notification_type === 'new_group') notificationsData.notification_type = 'New Group';
  if(notificationsData.notification_type === 'new_group_member') notificationsData.notification_type = 'New Group Member'; 
  if(notificationsData.notification_type === 'archived_group') notificationsData.notification_type = 'Group Archived'; 
  if(notificationsData.notification_type === 'new_transaction') notificationsData.notification_type = 'New Transaction'; 
  if(notificationsData.notification_type === 'updated_transaction') notificationsData.notification_type = 'Updated Transaction'; 
  if(notificationsData.notification_type === 'deleted_transaction') notificationsData.notification_type = 'Deleted Transaction';

  return (
    <div className={archive && 'archive'} >
      {notificationsData && (
        <h3>{notificationsData.notification_type}</h3>
      )}
      {notificationsData &&
        <small>{format((notificationsData.created_at), 'MMMM dd, yyyy')}</small>
      }
    </div>
  );
}

export default NotificationsAllSidebarTabPanelItem;