import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function useModalView() {
  const navigate = useNavigate();

  const [profileView, setProfileView] = useState(false);
  const [newGroupView, setNewGroupView] = useState(false);
  const [deleteProfileView, setDeleteProfileView] = useState(false);
  const [deleteConfirmation, setDeleteConfirmation] = useState(false);
  const [editUser, setEditUser] = useState(false);
  const [addExpense, setAddExpense] = useState(false);
  const [addPayment, setAddPayment] = useState(false);
  const [transactionDetails, setTransactionDetails] = useState(false);
  const [addGroupMemberView, setAddGroupMemberView] = useState(false);
  // add new state here

  const setAllViewsToFalse = () => {
    setProfileView(false);
    setNewGroupView(false);
    setDeleteProfileView(false);
    setDeleteConfirmation(false);
    setEditUser(false);
    setAddExpense(false);
    setAddPayment(false);
    setTransactionDetails(false);
    setAddGroupMemberView(false);
    // add new set false here
  };

  const closeModal = () => {
    navigate(-1);
    setAllViewsToFalse();
  };

  const openModal = (urlpath) => {
    if (urlpath === "profile") setProfileView(true);
    if (urlpath === "new-group") setNewGroupView(true);
    if (urlpath === "profile-delete") setDeleteProfileView(true);
    if (urlpath === "delete-confirmation") setDeleteConfirmation(true);
    if (urlpath === "profile-edit") setEditUser(true);
    
    let endOfUrl = urlpath.slice(-12);
    if (endOfUrl === "add-expense") setAddExpense(true);
    endOfUrl = urlpath.slice(-11);
    if (endOfUrl === "add-payment") setAddPayment(true);
    const startOfUrl = urlpath.slice(0, 19);
    if (startOfUrl === "transaction-details") setTransactionDetails(true);
    endOfUrl = urlpath.slice(-16);
    if (endOfUrl === "add_group_member") setAddGroupMemberView(true);
    // add new path here to set true
  };

  const navigateModal = (path) => {
    setAllViewsToFalse();
    openModal(path);
  };


  return {
    profileView,
    newGroupView,
    deleteProfileView,
    deleteConfirmation,
    editUser,
    addExpense,
    addPayment,
    transactionDetails,
    addGroupMemberView,
    // add new state view here
    closeModal,
    openModal,
    navigateModal
  };
}