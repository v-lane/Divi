import React from 'react';

import '../../styles/Groups.scss';
import GroupsList from './GroupsList';

const Groups = (props) => {
  const { userGroups, openModal } = props;

  return (
    <article className='groups-section'>
      <h2>Groups</h2>
      <GroupsList userGroups={userGroups} openModal={openModal} />
    </article>
  );
};

export default Groups;