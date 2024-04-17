import React from 'react'


import { Button } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const ButtonAll = (props) => {

  return (
    <Button className="button-all" variant="contained" color="info">
      <ArrowForwardIcon />
      </Button>

  );
};

export default ButtonAll;