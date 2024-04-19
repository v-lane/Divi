import React, { useState } from "react";
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
  // add new state here

  const closeModal = () => {
    navigate(-1);
    setProfileView(false);
    setNewGroupView(false);
    setDeleteProfileView(false);
    setDeleteConfirmation(false);
    setEditUser(false);
    setAddExpense(false);
    setAddPayment(false);
    setTransactionDetails(false);
    // add new set false here
  }

  const openModal = (urlpath) => {
    if(urlpath === "profile") setProfileView(true)
    if(urlpath === "new-group") setNewGroupView(true)
    if(urlpath === "profile-delete") setDeleteProfileView(true)
    if(urlpath === "delete-confirmation") setDeleteConfirmation(true)
    if(urlpath === "profile-edit") setEditUser(true)
    if(urlpath === "add-expense") setAddExpense(true)
    if(urlpath === "add-payment") setAddPayment(true)
    if(urlpath === "transaction-details") setTransactionDetails(true)
    // add new path here to set true
  }

  const navigateModal = (path) => {
    setProfileView(false);
    setNewGroupView(false);
    setDeleteProfileView(false);
    setDeleteConfirmation(false);
    setEditUser(false);
    setAddExpense(false);
    setAddPayment(false);
    setTransactionDetails(false);
    openModal(path)
  }


  return {
    profileView,
    newGroupView,
    deleteProfileView,
    deleteConfirmation,
    editUser,
    addExpense,
    addPayment,
    transactionDetails,
    // add new state view here
    closeModal,
    openModal,
    navigateModal
  };
}