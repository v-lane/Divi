import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

import '../../styles/CreateGroupForm.scss';

import { Button, FormControl, Input, Select, InputLabel, MenuItem, TextField } from "@mui/material";



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

  // const handleChange = (event) => {
  //   setFormValue({
  //     ...formValue,
  //     [event.target.name]: event.target.value
  //   });
  // };

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



  return (
    <form className='add-member-form' autoComplete="off" 
    // onSubmit={()=> }
    >
      <TextField
        id='0-member-email'
        required
        type="email"
        name="memberEmail"
        label="Member Email"
        // value={formValue.groupName}
        // onChange={handleChange}
      />

      <TextField
        id="1-member-email"
        type="email"
        name="memberEmail"
        label="Optional New Member Email"
        // value={formValue.memberEmail}
        // onChange={handleChange}
      />

      <small>+ Additional members can be added after group is created from the group dashboard.</small>
      <Button type="submit" className="add-member-button" variant="contained" color="info">Add Group Member(s)</Button>
    </form>

  );
};

export default AddMemberForm;