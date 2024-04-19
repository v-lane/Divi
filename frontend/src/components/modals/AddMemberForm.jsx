import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

import '../../styles/AddMemberForm.scss';

import { Button, TextField, Fab } from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';



const AddMemberForm = ({activeGroup}) => {
  const [newMembers, setNewMembers] = useState(1)
  const [formData, setFormData] = useState([
    {
      id: 0,
      email: ''
    }
  ]);

  const onClickRemove = () => {
    if (newMembers > 1) {
      setNewMembers(prev => prev - 1)
      const newFormData = [...formData];
      newFormData.pop();
      setFormData(newFormData);
    }
  };

  const onClickAdd = () => {
    setNewMembers(prev => prev + 1)
    const newFormData = [...formData];
    newFormData.push({
      id: formData.length,
      email: ''
    });
    setFormData(newFormData);
  };

  const handleChange = (e) => {
    const newFormData = [...formData];
    newFormData[e.target.id].email = e.target.value;
    setFormData(newFormData);
  };

  const handleSubmit = (e) => {
    e.preventDefault()
    const newFormData = [...formData];
    newFormData.push({group_id: activeGroup});
    setFormData(newFormData);
  }

  return (
    <form className='add-member-form' autoComplete="off"
      onSubmit={handleSubmit}
    >
      {Array.from({length: newMembers}).map((x, i) => (
        <TextField
          key={i}
          id={`${i}`}
          required
          type="email"
          name="memberEmail"
          label="New Member Email"
          value={formData[i].email}
          onChange={handleChange}
        />
      ))}

      <footer>
        <div className='update-new-members'>
          <div className='add-member'>
            <Fab color="primary" aria-label="add" onClick={onClickAdd}>
              <AddIcon />
            </Fab>
            <p>Add Additional Group Member</p>
          </div>
          <div className='remove-member'>
            <Fab color="primary" aria-label="remove" onClick={onClickRemove}>
              <RemoveIcon />
            </Fab>
            <p>Remove Additional Group Member</p>
          </div>
        </div>
        <Button type="submit" className="add-member-button" variant="contained" color="info">Add Group Member(s)</Button>
      </footer>
    </form>
  );
};

export default AddMemberForm;