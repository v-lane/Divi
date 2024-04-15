import React, { useState } from 'react';

import '../styles/ModalView.scss';

import Box from '@mui/material/Box';
import Icon from '@mui/material/Icon';
import UserProfile from '../components/UserProfile';


const ModalView = (props) => {
  const { handleClick, userProfileData } = props;
  const [profileView, setProfileView] = useState(true);



  return (
    <section className="overlay">
      <Box className="modal">
        <header>
          <Icon className='close-button' onClick={handleClick}>close</Icon>
          <h2>
            {profileView && "Profile"}
          </h2>
        </header>
        {profileView && <UserProfile userProfileData={userProfileData} />}
      </Box>
    </section>
  );
};

export default ModalView;