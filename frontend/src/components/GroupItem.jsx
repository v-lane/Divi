import React from 'react';

import Launch from '@mui/icons-material/Launch';
import LaunchButton from './LaunchButton';


const GroupItem = ({ group }) => {

  return (
    <li className='group-item'>
      <header>
        <h3>{group.name}</h3>
        <LaunchButton className='group-launch'/>
      </header>
      <p><em>Group Type: </em>
        {group.group_type}</p>
      <h4>Members</h4>
      <ul>
        {group.users.map(user => (
          <li className='group-member' key={user.id}>
            {user.username}
          </li>
        ))}
      </ul>
    </li>
  );
};

export default GroupItem;