import React from 'react';

import '../styles/Groups.scss';
import { format } from 'date-fns';


const GroupsAllListItem = ({userGroupsExamples}) => {
  return (
    <tr>
      <td>
        <ul>
          <li>{userGroupsExamples.name}</li>
          <li>Type: {userGroupsExamples.group_type}</li>
          <li>Created: {format((userGroupsExamples.created_at), 'MMMM dd, yyyy')}</li>
        </ul>
      </td>
      <td >
        <ul>
          {userGroupsExamples.users.filter(user => user.id === userGroupsExamples.user_id).map(owner => (
            <li key={owner.id}>{owner.username}</li>
          ))}
        </ul>
      </td>
      <td>
        <ul>
          {userGroupsExamples.users.filter(user => user.id !== userGroupsExamples.user_id).map(member => (
            <li key={member.id}>{member.username}</li>
          ))}
        </ul>
      </td>
    </tr>
  );
};

export default GroupsAllListItem;