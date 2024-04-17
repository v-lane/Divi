import React from 'react'
import { Button } from '@mui/material';
import LaunchIcon from '@mui/icons-material/Launch';

import '../styles/LaunchButton.scss';

const LaunchButton = ({color}) => {

  return (
    <Button className="launch-button" variant="outlined" color={color ? "launch" : "launch_contrast"} size="medium"><LaunchIcon /></Button>
  );
};

export default LaunchButton;