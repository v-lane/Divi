import React from "react";

import '../styles/TopNavigationBar.scss';
import Icon from '@mui/material/Icon';
import { Button } from "@mui/material";

import { Link } from 'react-router-dom';

const TopNavigationBar = (props) => {


  return (
    <nav className="top-nav-bar">
      <span className="logo">DIVI</span>
      <ul>
        <li>
          <Button variant="contained" color="primary_nav">Login</Button>
        </li>
        <li>
          <Button variant="contained" color="primary_nav">Register</Button>
        </li>
        <li>
          <Button variant="contained" color="primary_nav">Logout</Button>
        </li>
        <li>
          <Link to="all_notifications" underline="none">
            <Icon>notifications_none</Icon>
          </Link>
        </li>
      </ul>

    </nav>
  );
};

export default TopNavigationBar;
