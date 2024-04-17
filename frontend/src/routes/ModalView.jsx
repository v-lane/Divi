import React, { useState } from 'react';

import '../styles/ModalView.scss';
import UserProfile from '../components/modals/UserProfile';
import CreateGroupForm from '../components/modals/CreateGroupForm';
import DeleteUserProfile from '../components/modals/DeleteUserProfile';

import Box from '@mui/material/Box';
import Icon from '@mui/material/Icon';


const ModalView = (props) => {
  const { handleClick, confirmDelete, userProfileData, useModalView } = props;



  


  return (
    <section className="overlay">
      <Box className="modal">
        <header>
          <Icon className='close-button' onClick={handleClick}>close</Icon>
          <h2>
            {useModalView.profileView && "Profile"}
            {useModalView.newGroupView && "New Group"}
            {useModalView.deleteProfileView && "Delete User Profile"}
          </h2>
        </header>
        {useModalView.profileView && <UserProfile confirmDelete={confirmDelete} userProfileData={userProfileData} useModalView={useModalView} />}
        {useModalView.newGroupView && <CreateGroupForm useModalView={useModalView}/>}
        {useModalView.deleteProfileView && <DeleteUserProfile userProfileData={userProfileData} useModalView={useModalView}/>}
      </Box>
    </section>
  );
};

export default ModalView;