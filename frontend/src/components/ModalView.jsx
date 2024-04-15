import React from 'react';

import '../styles/ModalView.scss';

import Box from '@mui/material/Box';
import Icon from '@mui/material/Icon';


const ModalView = (props) => {
  const {handleClick} = props



  return (
    <section className="overlay">
      <Box className="modal">
        <header>
        <Icon className='close-button' onClick={handleClick}>close</Icon>
        <h2>Modal Header</h2>
        </header>
        <p>Duis mollis, est non commodo luctus, nisi erat porttitor ligula.</p>
      </Box>
    </section>
  );
};

export default ModalView;