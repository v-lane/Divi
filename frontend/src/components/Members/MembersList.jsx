import React from 'react';
import { Link, useLocation } from "react-router-dom";

import '../../styles/Members.scss';
import ButtonStandard from '../ButtonStandard';
import ButtonAll from '../ButtonAll';
import MembersListItem from './MembersListItem';



const MembersList = (props) => {
  const { openModal } = props;
  const location = useLocation();


  return (
    <>
      <ul className='members-list'>
      <MembersListItem />
      <MembersListItem />
      <MembersListItem />
      
        {/* {Array.isArray(userGroups) && userGroups.map(group => (
          <GroupListItem
            key={group.id}
            group={group}
          />
        ))} */}
      </ul>
      <footer className='members-section-footer'>
        {/* <Link to="new-member" state={{ background: location }}  */}
        {/* onClick={(() => openModal('new-group'))} */}
        {/* > */}
          <ButtonStandard buttonName={'Create New Member'} />
        {/* </Link> */}
        {/* <Link to='all_members'> */}
          <ButtonAll />
        {/* </Link> */}
      </footer>
    </>
  );
};

export default MembersList;