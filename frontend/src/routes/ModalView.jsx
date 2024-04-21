import React, { useState } from 'react';

import '../styles/ModalView.scss';
import UserProfile from '../components/modals/UserProfile';
import CreateGroupForm from '../components/modals/CreateGroupForm';
import DeleteUserProfile from '../components/modals/DeleteUserProfile';
import UserDeleted from '../components/modals/UserDeleted';
import EditUserForm from '../components/modals/EditUserForm';
import AddExpenseForm from '../components/modals/AddExpenseForm';
import AddPaymentForm from '../components/modals/AddPaymentForm';
import TransactionDetails from '../components/modals/TransactionDetails';
import AddMemberForm from '../components/modals/AddMemberForm';

import Box from '@mui/material/Box';
import Icon from '@mui/material/Icon';


const ModalView = (props) => {
  const { isLoading, activeGroup, cancelDelete, deleteUser, userProfileData, activeGroupDetails, useModalView, setUser, group, transactions, setTransactions, activeTransactionDetails, setActiveTransaction } = props;

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
            {useModalView.transactionDetails && `Transaction Details`}
            {useModalView.addGroupMemberView && `Add Group Member`}
          </h2>
        </header>
        {useModalView.profileView && <UserProfile userProfileData={userProfileData} useModalView={useModalView} />}
        {useModalView.newGroupView && <CreateGroupForm useModalView={useModalView}/>}
        {useModalView.deleteProfileView && <DeleteUserProfile cancelDelete={cancelDelete} deleteUser={deleteUser} userProfileData={userProfileData} useModalView={useModalView}/>}
        {useModalView.deleteConfirmation && <UserDeleted userProfileData={userProfileData} useModalView={useModalView} />}
        {useModalView.editUser && <EditUserForm userProfileData={userProfileData} cancelDelete={cancelDelete} useModalView={useModalView} setUser={setUser} />}
        {useModalView.addExpense && <AddExpenseForm userProfileData={userProfileData} useModalView={useModalView} group={group} setTransactions={setTransactions} activeGroupDetails={activeGroupDetails}/>}
        {useModalView.addPayment && <AddPaymentForm userProfileData={userProfileData} useModalView={useModalView} group={group} setTransactions={setTransactions} activeGroupDetails={activeGroupDetails}/>}
        {useModalView.transactionDetails && <TransactionDetails isLoading={isLoading} transactions={transactions} activeTransactionDetails={activeTransactionDetails} userProfileData={userProfileData} useModalView={useModalView} group={group} setTransactions={setTransactions}/>}
        {useModalView.addGroupMemberView && <AddMemberForm activeGroup={activeGroup} activeGroupDetails={activeGroupDetails} useModalView={useModalView}/>}
      </Box>
    </section>
  );
};

export default ModalView;