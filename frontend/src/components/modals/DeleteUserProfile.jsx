import React from 'react'
import '/src/styles/DeleteUserProfile.scss'
import { Button } from "@mui/material";
import ButtonStandard from '../ButtonStandard';

const DeleteUserProfile = (props) => {

  const {userProfileData, deleteUser, useModalView} = props;

  return (
      <section className='confirmation-page'>
        <article>
        <p className='greeting'>Hello {userProfileData.username}, are you sure you would like to delete your profile? </p>
        <div className='sub-text'>
          <p>This action cannot be undone and will result in an immediate loss of access to your profile and it's data.</p>
          <p>If you would like to proceed and delete your profile, please click <span className='bold'>Confirm</span> below. To cancel this action and return to your profile, please click <span className='bold'>Cancel</span></p>
        </div>
        </article>
        <p>*LOGO GOES HERE*</p>
      <div className='buttons'>
        <Button className="profile-button delete" variant="contained" color="info" onClick={(()=> useModalView.navigateModal('profile'))}>Cancel</Button>
        <Button className="profile-button delete" variant="contained" color="error" onClick={deleteUser}>Confirm</Button>
      </div>
      </section>
  )
}

export default DeleteUserProfile;