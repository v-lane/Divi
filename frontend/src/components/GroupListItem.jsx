import React from 'react';

import LaunchButton from './LaunchButton';


const GroupListItem = ({ group }) => {

  return (
    <li className='group-item'>
      <header>
        <h3>{group.name}</h3>
        <LaunchButton color={1}/>
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

export default GroupListItem;