import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

import '../../styles/AddMemberForm.scss';

import { Button, TextField, Fab } from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';



const AddMemberForm = ({ activeGroup }) => {
  const [newMembers, setNewMembers] = useState(1);
  const [formData, setFormData] = useState([
    {
      id: 0,
      email: ''
    }
  ]);

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
            if (!exists) {
              // continue
            } else {
              console.log('User is already in group.');
            }

            // save group member to UserGroups
            axios
              .post(`/api/user_groups`, userGroupDataMember)
              .then(response => {
                console.log('User Member record created. Notification record needs to be created');
                ///////////////////////
                //ADD LOGIC HERE TO CREATE NOTIFICATION FOR GROUP MEMBER
                ///////////////////////
              });
          } else {
            console.log('User does not exist. Notification email needs to be created');
            //////////////////
            //ADD LOGIC HERE TO CREATE NOTIFICATION (EMAIL)
            //////////////////
          }
        })

        // delete newMember.id;
        // newMember.group_id = activeGroup;


        // axios
        //   .post('/api/')
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