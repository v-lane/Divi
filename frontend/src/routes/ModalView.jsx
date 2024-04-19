import React, { useState } from 'react';

import '../styles/ModalView.scss';
import UserProfile from '../components/modals/UserProfile';
import CreateGroupForm from '../components/modals/CreateGroupForm';
import DeleteUserProfile from '../components/modals/DeleteUserProfile';
import UserDeleted from '../components/modals/UserDeleted';
import EditUserForm from '../components/modals/EditUserForm';
import AddExpenseForm from '../components/modals/AddExpenseForm';
import AddPaymentForm from '../components/modals/AddPaymentForm';

import Box from '@mui/material/Box';
import Icon from '@mui/material/Icon';


const ModalView = (props) => {
  const { cancelDelete, deleteUser, userProfileData, useModalView, setUser, group, setTransactions } = props;

  return (
    <section className="overlay">
      <Box className="modal">
        <header>
          <Icon className='close-button' onClick={(() => useModalView.closeModal())}>close</Icon>
          <h2>
            {useModalView.profileView && "Profile"}
            {useModalView.newGroupView && "New Group"}
            {useModalView.deleteProfileView && "Delete User Profile"}
            {useModalView.deleteConfirmation && "Profile Deleted"}
            {useModalView.editUser && `Edit ${userProfileData.username}'s User Profile`}
            {useModalView.addExpense && `Add Expense`}
            {useModalView.addPayment && `Add Payment`}
          </h2>
        </header>
        {useModalView.profileView && <UserProfile userProfileData={userProfileData} useModalView={useModalView} />}
        {useModalView.newGroupView && <CreateGroupForm useModalView={useModalView}/>}
        {useModalView.deleteProfileView && <DeleteUserProfile cancelDelete={cancelDelete} deleteUser={deleteUser} userProfileData={userProfileData} useModalView={useModalView}/>}
        {useModalView.deleteConfirmation && <UserDeleted userProfileData={userProfileData} useModalView={useModalView} />}
        {useModalView.editUser && <EditUserForm userProfileData={userProfileData} cancelDelete={cancelDelete} useModalView={useModalView} setUser={setUser} />}
        {useModalView.addExpense && <AddExpenseForm userProfileData={userProfileData} useModalView={useModalView} group={group} setTransactions={setTransactions}/>}
        {useModalView.addPayment && <AddPaymentForm userProfileData={userProfileData} useModalView={useModalView} group={group} setTransactions={setTransactions}/>}
      </Box>
    </section>
  );
};

export default ModalView;