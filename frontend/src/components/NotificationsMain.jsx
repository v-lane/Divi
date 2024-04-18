import React, { useState } from 'react';

import '../styles/NotificationsAll.scss';
import { format } from 'date-fns';
// import GroupsAllList from './GroupsAllList';

const NotificationsMain = ({ activeTab, fullView }) => {

  return (
    <section className='notifications-main'>
      {fullView ?
        <div className='notifications-message-body'>
          <h2>{fullView.notification_type}</h2>
          <h3>{fullView.group.name}</h3>
          <p>{fullView.description}</p>
          <small>{format((fullView.created_at), 'MMMM dd, yyyy')}</small>
        </div>
        :
        <p>Click on a notification to see more details!</p>
      }
    </section>
  );
};

export default NotificationsMain;