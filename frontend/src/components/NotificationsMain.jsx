import React, { useState } from 'react';

import '../styles/NotificationsAll.scss';
// import GroupsAllList from './GroupsAllList';

const NotificationsMain = ({activeTab}) => {

  return (
    <section className='notifications-main'>
      <h2>Notification Type</h2>
      <h3>Group: </h3>
      <p>This is the message from the notification.</p>
      <small>Date</small>
    </section>
  );
};

export default NotificationsMain;