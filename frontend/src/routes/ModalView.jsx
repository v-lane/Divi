import React from 'react';

import '../styles/ModalView.scss';

import Box from '@mui/material/Box';
import Icon from '@mui/material/Icon';
import UserProfile from '../components/UserProfile';


const ModalView = (props) => {
  const { handleClick, userProfileData } = props;



  return (
    <section className="overlay">
      <Box className="modal">
        <header>
          <Icon className='close-button' onClick={handleClick}>close</Icon>
          <h2>Modal Header</h2>
        </header>
        <UserProfile userProfileData={userProfileData}/>
      </Box>
    </section>
  );
};

export default ModalView;