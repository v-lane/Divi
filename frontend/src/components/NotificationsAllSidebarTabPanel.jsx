import React, { useState } from 'react';

import '../styles/NotificationsAll.scss';
// import GroupsAllList from './GroupsAllList';

function NotificationsAllSidebarTabPanel(props) {
  const { value, index } = props;

  return (
    <section className='notifications-sidebar-list'
    hidden={value !== index}
      id={`tabpanel-${index}`}
    >
      {value === 0 && (
        <p>Item One</p>
      )}
      {value === 1 && (
        <p>Item Two</p>
      )}
    </section>
  );
}

export default NotificationsAllSidebarTabPanel;