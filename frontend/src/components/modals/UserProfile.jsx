import React from 'react';

import '../../styles/UserProfile.scss';

import { Button } from "@mui/material";
import { format } from 'date-fns'



const UserProfile = (props) => {
  const { userProfileData, confirmDelete, handleEdit } = props;

  return (
    ( userProfileData && 

    <section className='user-profile'>
      <table>
        <tbody>

          <tr>
            <th>Username:</th>
            <td>{userProfileData.username}</td>
          </tr>
          <tr>
            <th>Email:</th>
            <td>{userProfileData.email}
            </td>
          </tr>
          <tr>
            <th>Profile Created:</th>
            <td>{format((userProfileData.created_at), 'MMMM dd, yyyy')}</td>
          </tr>
        </tbody>
      </table>
      <footer>
        <Button className="profile-button" variant="contained" color="info" onClick={handleEdit}>Edit</Button>
        <Button className="profile-button delete" variant="contained" color="error" onClick={confirmDelete}>Delete</Button>
      </footer>
    </section>
    )
  );
};

export default UserProfile;