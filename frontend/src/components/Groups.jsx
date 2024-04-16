import React from 'react';

import '../styles/Groups.scss';
import GroupItem from './GroupItem';

import { Button, Icon } from '@mui/material';



const Groups = (props) => {
  const { userGroups } = props;

  return (
    <article className='groups-section'>
      <h2>Groups</h2>
      <ul className='groups-list'>
        {Array.isArray(userGroups) && userGroups.map(group => (
          <GroupItem
            key={group.id}
            group={group}
          />
        ))}
      </ul>
      <footer>
      <Button className="profile-button" variant="contained" color="info">Create New Group</Button>
      <div className='more-button'>
          <Icon>arrow_forward</Icon>
      </div>
      </footer>
    </article>
  );
};

export default Groups;