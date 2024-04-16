import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

import '../../styles/CreateGroupForm.scss';

import { Button, FormControl, Input, Select, InputLabel, MenuItem, TextField } from "@mui/material";



const CreateGroupForm = ({ useModalView }) => {
  const groupTypes = ['Household', 'Trip', 'Personal'];
  const navigate = useNavigate();
  const [formValue, setFormValue] = useState({
    groupName: '',
    groupType: '',
    memberEmail: ''
  });

  const handleChange = (event) => {
    setFormValue({
      ...formValue,
      [event.target.name]: event.target.value
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = {
      name: formValue.groupName,
      group_type: formValue.groupType    
    }
    console.log(formData);
    axios
      .post(`/api/groups/`, formData)
      .then((response) => {
        console.log('post created:', response.data);
        navigate('/');
        useModalView.closeModal();
      })
      .catch((error) => {
        console.error("Error creating post:", error);
      });
  };


  return (
    <form className='new-group-form' autoComplete="off" onSubmit={handleSubmit}>
      <TextField
        id='group-name'
        required
        type="text"
        name="groupName"
        label="Group Name"
        value={formValue.groupName}
        onChange={handleChange}
      />

      <TextField
        id='group-type'
        required
        select
        name="groupType"
        label="Group Type"
        value={formValue.groupType}
        onChange={handleChange}
      >
        {groupTypes.map((type, index) => (
          <MenuItem key={index} value={type}>{type}</MenuItem>
        ))}
      </TextField>

      <TextField
        id="member-email"
        type="email"
        name="memberEmail"
        label="New Member Email"
        value={formValue.memberEmail}
        onChange={handleChange}
      />

      <small>+ Additional members can be added after group is created from the group dashboard.</small>
      <Button type="submit" className="create-group-button" variant="contained" color="info">Create Group</Button>
    </form>

  );
};

export default CreateGroupForm;