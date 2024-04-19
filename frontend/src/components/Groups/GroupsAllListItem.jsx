import React from 'react';

import '../../styles/GroupsAll.scss';
import { format } from 'date-fns';

import LaunchButton from '../LaunchButton';



const GroupsAllListItem = ({ userGroup }) => {
  return (
    <section className='group'>
      <ul>
        <li><h3>{userGroup.name}</h3></li>
        <li className='group-type'><strong>Type:</strong> {userGroup.group_type}</li>
        <li className='group-created'><strong>Created:</strong> {format((userGroup.created_at), 'MMMM dd, yyyy')}</li>
      </ul>
      <ul>
        {userGroup.users.filter(user => user.id === userGroup.user_id).map(owner => (
          <li key={owner.id}>{owner.username}</li>
        ))}
      </ul>
      <ul>
        {(userGroup.users.length > 1) && userGroup.users.filter(user => user.id !== userGroup.user_id).map(member => (
          <li key={member.id}>{member.username}</li>
        )) || <small><li>No members yet :(</li><li>Add some from the group dashboard</li></small>}
      </ul>
      <ul>
        <LaunchButton color={1} goTo={`group/${userGroup.id}/dashboard`} />
      </ul>
    </section>
  );
};

export default GroupsAllListItem;