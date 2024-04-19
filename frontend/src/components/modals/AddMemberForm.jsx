import React, { useState } from 'react';
import {useNavigate} from 'react-router-dom'
import axios from 'axios';

import '../../styles/AddMemberForm.scss';

import { Button, TextField, Fab, Alert } from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';


const AddMemberForm = ({ activeGroup, activeGroupDetails, useModalView }) => {
  const [newMembers, setNewMembers] = useState(1);
  const [formError, setFormError] = useState(null);
  const [formData, setFormData] = useState([{ id: 0, email: '' }]);

  const navigate = useNavigate()

  const handleClose = () => {
    console.log('click close');
    setFormError(null);
  };

  const onClickRemove = () => {
    if (newMembers > 1) {
      setNewMembers(prev => prev - 1);
      const newFormData = [...formData];
      newFormData.pop();
      setFormData(newFormData);
    }
  };

  const onClickAdd = () => {
    setNewMembers(prev => prev + 1);
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
    e.preventDefault();
    const newFormData = [...formData];
    // newFormData.push({group_id: activeGroup});
    // setFormData(newFormData);

    newFormData.forEach((newMember => {
      // check if member email exists
      const emailArr = newMember.email.split('.');
      const urlString = `start=${emailArr[0]}&end=${emailArr[1]}`;
      axios
        .get(`/api/users_email/${urlString}`)
        .then(response => {
          console.log('response.data', response);
          if (response.data) {
            const userGroupDataMember = {
              user_id: response.data.id,
              group_id: activeGroup,
              is_owner: false
            };

            // check if member is ALREADY in group
            if (activeGroupDetails.users.map(object => object.id).includes(userGroupDataMember.user_id)) {
              setFormError(`${newMember.email} is already a member of the group and cannot be added again.`);

            } else {
              console.log('User is NOT in group, continue');

              // save group member to UserGroups
              axios
                .post(`/api/user_groups`, userGroupDataMember)
                .then(response => {
                  console.log('User Member record created. Notification record needs to be created');
                  useModalView.closeModal()
                  
                  ///////////////////////
                  //ADD LOGIC HERE TO CREATE NOTIFICATION FOR GROUP MEMBER
                  ///////////////////////          
                });
            }
          } else {
            console.log('User does not exist. Notification email needs to be created');
            setFormError(`${newMember.email} does not have a Divi account. They have been sent an invite to create an account to join your group. When they do, you will receive a notification and they will show in the group members list. Feel free to send invites to other emails or close this form.`);
          }
        })

        .catch((error) => {
          console.error("Error creating post:", error);
        });
    })
    );
  };

  return (
    <form className='add-member-form' autoComplete="off"
      onSubmit={handleSubmit}
    >
      {formError && <Alert severity="error" onClose={handleClose}>
        {formError}
      </Alert>}

      {Array.from({ length: newMembers }).map((x, i) => (
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