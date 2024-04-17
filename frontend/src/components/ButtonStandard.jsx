import React from 'react'
import { Button } from '@mui/material';

const ButtonStandard = (props) => {
  const {buttonName} = props

  return (
    <Button className="button-standard" variant="contained" color="info">{buttonName}</Button>

  );
};

export default ButtonStandard;