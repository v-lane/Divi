import React from 'react';

const MembersListItem = (props) => {

  return (
    <li className='member-item'>
      <header>
        {/* <h3>{member.name}</h3> */}
        <h3>Member Name</h3>
      </header>
      <ul>
        <li><span>Owes: </span>$$</li>
        <li><span>Expects: </span>$$</li>
      </ul>
    </li>
  );
};

export default MembersListItem;