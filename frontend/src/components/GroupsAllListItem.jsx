import React from 'react';

import '../styles/GroupsAll.scss';
import { format } from 'date-fns';


const GroupsAllListItem = ({userGroup}) => {
  return (
    <tr>
      <td>
        <ul>
          <li>{userGroup.name}</li>
          <li>Type: {userGroup.group_type}</li>
          <li>Created: {format((userGroup.created_at), 'MMMM dd, yyyy')}</li>
        </ul>
      </td>
      <td >
        <ul>
          {userGroup.users.filter(user => user.id === userGroup.user_id).map(owner => (
            <li key={owner.id}>{owner.username}</li>
          ))}
        </ul>
      </td>
      <td>
        <ul>
          {userGroup.users.filter(user => user.id !== userGroup.user_id).map(member => (
            <li key={member.id}>{member.username}</li>
          ))}
        </ul>
      </td>
    </tr>
  );
};

export default GroupsAllListItem;