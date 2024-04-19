import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

import '../../styles/AddMemberForm.scss';

import { Button, TextField, Fab } from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';



const AddMemberForm = ({ useModalView }) => {
  const navigate = useNavigate();
  // const [formValue, setFormValue] = useState({
  //   groupName: '',
  //   groupType: '',
  //   memberEmail: ''
  // });

  ///////////////////
  // TEMPORARY - to be replaced by session cookies
  const userId = 1;
  /////////////////



  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   const groupData = {
  //     name: formValue.groupName,
  //     group_type: formValue.groupType,
  //     user_id: userId
  //   };
  //    // save group
  //    axios
  //    .post(`/api/groups/`, groupData)
  //    .then((response) => {
  //      const groupId = response.data.id;
  //      const userGroupDataOwner = {
  //        user_id: userId,
  //        group_id: groupId,
  //        is_owner: true
  //      };

  //      //check if member email exists
  //      if (formValue.memberEmail) {
  //       const emailArr = formValue.memberEmail.split('.')
  //       const urlString = `start=${emailArr[0]}&end=${emailArr[1]}`
  //       console.log('urlString',urlString);

  //        axios
  //          .get(`/api/users_email/${urlString}`)
  //          .then(response => {
  //           console.log('response.data', response);
  //            if (response.data) {
  //              const userGroupDataMember = {
  //                user_id: response.data.id,
  //                group_id: groupId,
  //                is_owner: false
  //              };
  //              // save group member to UserGroups
  //              axios
  //                .post(`/api/user_groups`, userGroupDataMember)
  //                .then(response => {
  //                  console.log('User Member record created. Notification record needs to be created');
  //                  ///////////////////////
  //                  //ADD LOGIC HERE TO CREATE NOTIFICATION FOR GROUP MEMBER
  //                  ///////////////////////
  //                })
  //            } else {
  //              console.log('User does not exist. Notification email needs to be created');
  //              //////////////////
  //              //ADD LOGIC HERE TO CREATE NOTIFICATION (EMAIL)
  //              //////////////////
  //            }
  //          });
  //      };

  //      // save owner to UserGroups
  //      axios
  //        .post(`/api/user_groups`, userGroupDataOwner)
  //        .then((response) => {
  //          console.log('post created:', response.data);
  //          navigate('/');
  //          useModalView.closeModal();
  //        });
  //    })
  //    .catch((error) => {
  //      console.error("Error creating post:", error);
  //    });
  // };

  const [formData, setFormData] = useState([
    {
      id: 0,
      email: ''
    }
  ]);

  const onClickRemove = () => {
    if (formData.length > 1) {
      const newFormData = [...formData]
      console.log('newformdata beforeRemove', newFormData);
      newFormData.pop()
      console.log('newformdata afterRemove', newFormData);
      setFormData(newFormData)
    }
  };

  const onClickAdd = () => {
    const newFormData = [...formData]
    newFormData.push({
      id: formData.length,
      email: ''
    })
    setFormData(newFormData)
  };

  const handleChange = (e) => {
    const newFormData = [...formData]
    newFormData[e.target.id].email = e.target.value
    setFormData(newFormData)
  };

  return (
    <form className='add-member-form' autoComplete="off"
      onSubmit={(e) => e.preventDefault()}
    >
      {formData.map((x, i) => (
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