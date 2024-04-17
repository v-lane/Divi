import React from 'react';

import '../styles/GroupsAll.scss';
import GroupsAllList from './GroupsAllList';

const GroupsAll = (props) => {
  const { userGroups, openModal } = props;

  return (
    <article className='all-groups-section'>
      <h1>All Groups</h1>
      <GroupsAllList userGroups={userGroups} openModal={openModal}/>
    </article>
  );
};

export default GroupsAll;