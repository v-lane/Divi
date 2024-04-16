import React, { useState } from 'react';

import '../../styles/CreateGroupForm.scss';

import { Button, FormControl, Input, Select, InputLabel, MenuItem } from "@mui/material";
// import { format } from 'date-fns'



const CreateGroupForm = (props) => {
  const groupType = ['Household', 'Trip', 'Personal'];
  const [type, setType] = useState('');
  const handleSubmit = (() => {
    console.log('submitted');
  });

  const handleChange = (event) => {
    setType(event.target.value);
  };

  return (
    <form className='new-group-form' autoComplete="off" onSubmit={handleSubmit}>
      <FormControl >
        <InputLabel htmlFor="group-name">Group Name</InputLabel>
        <Input id="group-name" defaultValue="" />
      </FormControl>
      <FormControl >
        <InputLabel id="select-group-type-label">Group Type</InputLabel>
        <Select
          key="select-group-type"
          labelId="select-group-type-label"
          id="select-group-type"
          value={type}
          label="Group Type"
          onChange={handleChange}
        >
          {groupType.map((type, index) => (
            <MenuItem key={index} value={type}>{type}</MenuItem>
          ))}
        </Select>
      </FormControl>
      <FormControl >
        <InputLabel htmlFor="new-member-email">New Member Email</InputLabel>
        <Input id="new-member-email" defaultValue="" />
      </FormControl>
      <small>+ Additional members can be added after group is created from the group dashboard.</small>
      <Button className="create-group-button" variant="contained" color="info">Create Group</Button>
    </form>

  );
};

export default CreateGroupForm;