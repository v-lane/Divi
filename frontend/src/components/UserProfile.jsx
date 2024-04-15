import React from 'react';

import '../styles/UserProfile.scss';
import { Button } from "@mui/material";



const UserProfile = (props) => {

  return (
    <section className='user-profile'>
      <table>
        <tbody>

          <tr>
            <th>Username:</th>
            <td>BestRoommate12</td>
          </tr>
          <tr>
            <th>Email:</th>
            <td>bessy@example.com</td>
          </tr>
          <tr>
            <th>Profile Created:</th>
            <td>January 12, 2024</td>
          </tr>
        </tbody>
      </table>
      <footer>
        <Button className="profile-button" variant="contained" color="info">Edit</Button>
        <Button className="profile-button" variant="contained" color="error">Delete</Button>
      </footer>

    </section>
  );
};

export default UserProfile;