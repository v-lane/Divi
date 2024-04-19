import React from 'react'
import { Button } from '@mui/material';
import LaunchIcon from '@mui/icons-material/Launch';
import { Link, useLocation } from 'react-router-dom'

import '../styles/LaunchButton.scss';

const LaunchButton = ({color, goTo, openModal }) => {
  const location = useLocation();

  return (
    <Link to={goTo} state={{ background: location }} onClick={(() => openModal(goTo))}>
    <Button className="launch-button" variant="outlined" color={color ? "launch" : "launch_contrast"} size="medium"><LaunchIcon /></Button>
    </Link>
  );
};

export default LaunchButton;