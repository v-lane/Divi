import React, { useState } from 'react';

import '../styles/NotificationsAll.scss';
import { format } from 'date-fns';


function NotificationsAllSidebarTabPanelItem({ archive, notificationsData, setFullView, fullView }) {

  if (notificationsData.notification_type === 'new_group') {
    notificationsData.notification_type = 'New Group';
    notificationsData.description = "You've been added to a new group! Check it out from your Dashboard or Groups Tab."
  }
  if (notificationsData.notification_type === 'new_group_member') {
    notificationsData.notification_type = 'New Group Member';
    notificationsData.description = "A new member has been added to your group! Check it out from your Dashboard or Groups Tab."
  }
  if (notificationsData.notification_type === 'archived_group') {
    notificationsData.notification_type = 'Group Archived';
    notificationsData.description = "This group has been archived! There were no outstanding payments or expenses, so there's no need to worry about lost transactions."
  }
  if (notificationsData.notification_type === 'new_transaction') {
    notificationsData.notification_type = 'New Transaction';
    notificationsData.description = "You've been sent a new transaction! Check it out from your Dashboard or Transactions Tab."
  }
  if (notificationsData.notification_type === 'updated_transaction') {
    notificationsData.notification_type = 'Updated Transaction';
    notificationsData.description = "You've been sent an updated transaction! Check it out from your Dashboard or Transactions Tab."
  }
  if (notificationsData.notification_type === 'deleted_transaction') {
    notificationsData.notification_type = 'Deleted Transaction';
    notificationsData.description = "A transaction that was previously sent to you has been deleted! Check it out from your Dashboard or Transactions Tab."
  }

  return (
    <>
      {notificationsData && (
        <div onClick={() => setFullView(notificationsData)} className={notificationsData.id === fullView.id ? 'active' : 'inactive'}>
          <h3>{notificationsData.notification_type}</h3>
          <small>{format((notificationsData.created_at), 'MMMM dd, yyyy')}</small>
        </div>
      )}
    </>
  );
}

export default NotificationsAllSidebarTabPanelItem;