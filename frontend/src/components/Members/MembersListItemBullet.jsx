import React from 'react';

const MembersListItemBullet = ({ user, balance }) => {

  return (
    <li className='member-balance-line'>
      {balance > 0 && <>Gets back <span className='owed'>${balance}</span> from <span className='member-with-balance'>{user.username}</span></>}
      {balance < 0 && <>Owes <span className='owes'>${balance * -1}</span> to <span className='member-with-balance'>{user.username}</span ></>}
      {balance === 0 && <>Settled up with <span className='member-with-balance'>{user.username}</span ></>}
    </li >
  );
};

export default MembersListItemBullet;