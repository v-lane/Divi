import React from "react";

import '../styles/TopNavigationBar.scss';
import Icon from '@mui/material/Icon';
import { Button, Badge } from "@mui/material";
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';


import { Link } from 'react-router-dom';

const TopNavigationBar = ({ user, activeGroup, activeGroupDetails }) => {


  return (
    <nav className="top-nav-bar">
      <span className="logo">DIVI</span>
      <ul>
        {!user && <li>
          <Button variant="contained" color="primary_nav">Login</Button>
        </li>}
        {!user && <li>
          <Button variant="contained" color="primary_nav">Register</Button>
        </li>}

        {user &&
          <li className="username">
            {activeGroup > 0 && <span className="group-name">{activeGroupDetails.name} &lt; </span>}
            {user.username}
          </li>}
        {user && <li>
          <Button variant="contained" color="primary_nav">Logout</Button>
        </li>}
        {user && <li>
          <Link to="all_notifications" underline="none">
            <Badge color="warning" variant="dot" anchorOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}>
              <NotificationsNoneIcon />
            </Badge>
          </Link>
        </li>}

      </ul>

    </nav>
  );
};

export default TopNavigationBar;
