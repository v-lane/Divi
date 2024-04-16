import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import '../../styles/CreateGroupForm.scss';

import { Button, FormControl, Input, Select, InputLabel, MenuItem, TextField } from "@mui/material";



const CreateGroupForm = ({ useModalView }) => {
  const groupTypes = ['Household', 'Trip', 'Personal'];
  const navigate = useNavigate();
  const [groupName, setGroupName] = useState('');
  const [groupNameError, setGroupNameError] = useState(false);
  const [groupType, setGroupType] = useState('');
  // const [groupTypeError, setGroupTypeError] = useState(false);
  const [memberEmail, setMemberEmail] = useState('');

  const handleSubmit = ((event) => {
    event.preventDefault();
    console.log('submitted');
    // navigate('/');
    // useModalView.closeModal();

  });

  const handleGroupNameChange = (event) => {
    setGroupName(event.target.value);
    if (event.target.validity.valid) {
      setGroupNameError(false);
    } else {
      setGroupNameError(true);
    }
  };

  const handleSelectChange = (event) => {
    setGroupType(event.target.value);
  };

  return (
    <form className='new-group-form' autoComplete="off" onSubmit={handleSubmit}>
      <TextField
        required
        label="Group Name"
        value={groupName}
        onChange={handleGroupNameChange}
        error={groupNameError}
        helperText={groupNameError ? "Please enter group name" : ""}
      />

      <TextField
        required
        select
        label="Group Type"
        value={groupType}
        onChange={handleSelectChange}
      >
        {groupTypes.map((type, index) => (
          <MenuItem key={index} value={type}>{type}</MenuItem>
        ))}
      </TextField>

      <FormControl variant='standard'>
        <InputLabel htmlFor="new-member-email">New Member Email</InputLabel>
        <Input id="new-member-email" defaultValue="" />
      </FormControl>
      <small>+ Additional members can be added after group is created from the group dashboard.</small>
      <Button type="submit" className="create-group-button" variant="contained" color="info">Create Group</Button>
    </form>

  );
};

export default CreateGroupForm;