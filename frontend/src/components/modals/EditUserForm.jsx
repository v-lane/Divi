import React, {useState} from "react";
import {useNavigate} from "react-router-dom"
import axios from 'axios'
import { Button, MenuItem, TextField } from "@mui/material";
import '/src/styles/EditUserForm.scss'

const EditUserForm = (props) => {
  const { userProfileData, useModalView } = props;

  const [formValue, setFormValue] = useState({
    userName: userProfileData.username,
    email: userProfileData.email
  });

  const handleChange = (event) => {
    setFormValue({
      ...formValue,
      [event.target.name]: event.target.value
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const userData = {
      username: formValue.userName,
      email: formValue.email,
      id: userProfileData.id
    };
    axios
      .patch(`/api/users/${userProfileData.id}/`, userData)
      .then(() => {
        axios
          .get(`/api/users/${userProfileData.id}`)
          .then((res) => res.data)
          .then(useModalView.setUser);
      })
      .then(useModalView.navigateModal("profile"))
      .then(useModalView.closeModal());

  };

  return (
    <form className='new-group-form' autoComplete="off" onSubmit={handleSubmit}>
      <TextField
        id='userName'
        required
        type="text"
        name="userName"
        label="Username"
        value={formValue.userName}
        onChange={handleChange}
      />

      <TextField
        id='user-email'
        required
        type='text'
        name="email"
        label="Email"
        value={formValue.email}
        onChange={handleChange}
      />

<div className='buttons'>
          <Button className="button" variant="contained" color="info" onClick={(()=> useModalView.navigateModal('profile'))}>Cancel</Button>
          <Button type="submit" className="button" variant="contained" color="info">Confirm</Button>
        </div>
    </form>
  )
};

export default EditUserForm;