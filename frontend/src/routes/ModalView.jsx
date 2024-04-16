import React, { useState } from 'react';

import '../styles/ModalView.scss';
import UserProfile from '../components/modals/UserProfile';
import CreateGroupForm from '../components/modals/CreateGroupForm';

import Box from '@mui/material/Box';
import Icon from '@mui/material/Icon';

const ModalView = (props) => {
  const { handleClick, userProfileData } = props;
  const [profileView, setProfileView] = useState(false);
  const [newGroupView, setNewGroupView] = useState(true);

  


  return (
    <section className="overlay">
      <Box className="modal">
        <header>
          <Icon className='close-button' onClick={handleClick}>close</Icon>
          <h2>
            {profileView && "Profile"}
            {newGroupView && "New Group"}
          </h2>
        </header>
        {profileView && <UserProfile userProfileData={userProfileData} />}
        {newGroupView && <CreateGroupForm />}
      </Box>
    </section>
  );
};

export default ModalView;