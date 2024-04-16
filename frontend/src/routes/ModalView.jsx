import React, { useState } from 'react';

import '../styles/ModalView.scss';
import UserProfile from '../components/modals/UserProfile';
import CreateGroupForm from '../components/modals/CreateGroupForm';

import Box from '@mui/material/Box';
import Icon from '@mui/material/Icon';


const ModalView = (props) => {
  const { handleClick, userProfileData, useModalView } = props;



  


  return (
    <section className="overlay">
      <Box className="modal">
        <header>
          <Icon className='close-button' onClick={handleClick}>close</Icon>
          <h2>
            {useModalView.profileView && "Profile"}
            {useModalView.newGroupView && "New Group"}
          </h2>
        </header>
        {useModalView.profileView && <UserProfile userProfileData={userProfileData} useModalView={useModalView} />}
        {useModalView.newGroupView && <CreateGroupForm useModalView={useModalView}/>}
      </Box>
    </section>
  );
};

export default ModalView;