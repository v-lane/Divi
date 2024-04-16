import React, { useState } from "react";

export default function useModalView() {
  const [profileView, setProfileView] = useState(false);
  const [newGroupView, setNewGroupView] = useState(false);

  const closeModal = () => {
    setProfileView(false);
    setNewGroupView(false);
  }

  const openModal = (urlpath) => {
    if(urlpath === "profile") setProfileView(true)
    if(urlpath === "new-group") setNewGroupView(true)
  }


  return {
    profileView,
    newGroupView,
    setProfileView,
    setNewGroupView,
    closeModal,
    openModal
  };
}