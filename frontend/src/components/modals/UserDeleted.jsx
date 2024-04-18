import React from "react";
import '/src/styles/UserDeleted.scss'

const UserDeleted = (props) => {

  return (
    <article className="confirm-user-deleted">
      <h3>Your Profile has been deleted successfully.</h3>
      <p>Thank you for using <span className="brand">DIVI</span></p>
      <p>Please create a new account to continue sharing expenses.</p>
      <p>*LOGO GOES HERE*</p>
    </article>
  )
};

export default UserDeleted;