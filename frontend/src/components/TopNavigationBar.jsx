import React from "react";

import '../styles/TopNavigationBar.scss';
import Icon from '@mui/material/Icon';
import { Button } from "@mui/material";

const TopNavigationBar = (props) => {


  return (
    <nav className="top-nav-bar">
      <span className="logo">DIVI</span>
      <ul>
        <li>
          <Button variant="outlined" color="primary_nav" >Login</Button>
        </li>
        <li>
          <Button variant="outlined" color="primary_nav">Register</Button>
        </li>
        <li>
          <Button variant="outlined" color="primary_nav">Logout</Button>
        </li>
        <li>
          <Icon >notifications_none</Icon>
        </li>
      </ul>

    </nav>
  );
};

export default TopNavigationBar;
