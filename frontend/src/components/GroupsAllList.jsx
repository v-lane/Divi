import React from 'react';
import { Link, useLocation } from "react-router-dom";

import '../styles/Groups.scss';
import GroupListItem from './GroupListItem';
import GroupsAllListItem from './GroupsAllListItem';
import ButtonStandard from './ButtonStandard';
import ButtonAll from './ButtonAll';
import { format } from 'date-fns';





const GroupsAllList = (props) => {
  const { userGroups, openModal } = props;
  const location = useLocation();

  const userGroupsExamples = [
    {
      created_at: "2024-04-17T11:24:42.739Z",
      group_type: "Household",
      id: 1,
      name: "Sun Gaming",
      user_id: 1,
      users: [
        {
          created_at: "2024-04-17T11:24:42.709Z",
          email: "agripina@barton-feeney.test",
          id: 1,
          username: "Soon Considine"
        },
        {
          created_at: "2024-04-17T11:24:42.719Z",
          email: "kurt_von@kovacek-watsica.example",
          id: 4,
          username: "Charles Sawayn DO"
        },
        {
          created_at: "2024-04-17T11:24:42.719Z",
          email: "charlioe@kovacek-watsica.example",
          id: 3,
          username: "Charlie Dosa"
        },
      ]
    },
    // {
    //   created_at: "2024-04-17T11:24:42.739Z",
    //   group_type: "Household",
    //   id: 2,
    //   name: "Sun Gaming",
    //   user_id: 4,
    //   users: [
    //     {
    //       created_at: "2024-04-17T11:24:42.709Z",
    //       email: "agripina@barton-feeney.test",
    //       id: 1,
    //       username: "Soon Considine"
    //     },
    //     {
    //       created_at: "2024-04-17T11:24:42.719Z",
    //       email: "kurt_von@kovacek-watsica.example",
    //       id: 4,
    //       username: "Charles Sawayn DO"
    //     },
    //   ]
    // },
  ];


  return (
    <>
      <table>
        <thead>
          <tr>
            <th scope="col">Group Details</th>
            <th scope="col">Group Owner</th>
            <th scope="col">Member(s) </th>
          </tr>
        </thead>
        <tbody>
        <GroupsAllListItem userGroupsExamples={userGroupsExamples[0]} key={userGroupsExamples[0].id}/>

        </tbody>
      </table>

      <footer className='groups-section-footer'>
        <Link to="new-group" state={{ background: location }} onClick={(() => openModal('new-group'))}>
          <ButtonStandard buttonName={'Create New Group'} />
        </Link>
      </footer>
    </>
  );
};

export default GroupsAllList;