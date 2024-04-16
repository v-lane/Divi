import React from 'react';

import { Button } from '@mui/material';
import LaunchIcon from '@mui/icons-material/Launch';


const GroupItem = ({ group }) => {

  return (
    <li className='group-item'>
      <header>
        <h3>{group.name}</h3>
        <Button className="launch-button" variant="outlined" color="primary" size="large"><LaunchIcon /></Button>
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