import React from 'react';

import '../styles/Groups.scss';
import GroupsList from './GroupsList';
import GroupsAllList from './GroupsAllList';

const GroupsAll = (props) => {
  const { userGroups, openModal } = props;

  return (
    <article className='groups-section'>
      <h1>Groups</h1>
      <GroupsAllList userGroups={userGroups} openModal={openModal}/>
    </article>
  );
};

export default GroupsAll;