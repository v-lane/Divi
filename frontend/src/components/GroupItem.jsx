import React from 'react';

const GroupItem = ({group}) => {

  return (
    <li>
      <h3>{group.name}</h3>
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