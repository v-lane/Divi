import React from 'react'
import { Button } from '@mui/material';
import LaunchIcon from '@mui/icons-material/Launch';

const LaunchButton = (props) => {

  return (
    <Button className="launch-button" variant="outlined" color="primary" size="large"><LaunchIcon /></Button>
  );
};

export default LaunchButton;