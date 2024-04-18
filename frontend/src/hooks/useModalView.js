import React, { useState } from "react";

export default function useModalView() {
  const [profileView, setProfileView] = useState(false);
  const [newGroupView, setNewGroupView] = useState(false);
  const [deleteProfileView, setDeleteProfileView] = useState(false);
  const [deleteConfirmation, setDeleteConfirmation] = useState(false);
  const [editUser, setEditUser] = useState(false);
  // add new state here

  const closeModal = () => {
    setProfileView(false);
    setNewGroupView(false);
    setDeleteProfileView(false);
    setDeleteConfirmation(false);
    setEditUser(false);
    // add new set false here
  }

  const openModal = (urlpath) => {
    if(urlpath === "profile") setProfileView(true)
    if(urlpath === "new-group") setNewGroupView(true)
    if(urlpath === "profile-delete") setDeleteProfileView(true)
    if(urlpath === "delete-confirmation") setDeleteConfirmation(true)
    if(urlpath === "profile-edit") setEditUser(true)
    // add new path here to set true
  }


  return {
    profileView,
    newGroupView,
    deleteProfileView,
    deleteConfirmation,
    editUser, 
    // add new state view here
    closeModal,
    openModal
  };
}