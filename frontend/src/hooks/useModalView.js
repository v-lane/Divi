import React, { useState } from "react";

export default function useModalView() {
  const [profileView, setProfileView] = useState(false);
  const [newGroupView, setNewGroupView] = useState(false);
  // add new state here

  const closeModal = () => {
    setProfileView(false);
    setNewGroupView(false);
    // add new set false here
  }

  const openModal = (urlpath) => {
    if(urlpath === "profile") setProfileView(true)
    if(urlpath === "new-group") setNewGroupView(true)
    // add new path here to set true
  }


  return {
    profileView,
    newGroupView,
    // add new state view here
    closeModal,
    openModal
  };
}