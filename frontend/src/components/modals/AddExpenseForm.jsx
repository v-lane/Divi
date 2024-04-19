import React, { useState } from "react";
import '/src/styles/AddExpenseForm.scss';
import { Link, useLocation } from "react-router-dom";
import { Button, MenuItem, TextField } from "@mui/material";
import axios from 'axios';

const AddExpenseForm = (props) => {
  const { userProfileData, useModalView, group } = props;
  const groupNames = group.map((item) => item.name);

  // const navigate = useNavigate();
  const [formValue, setFormValue] = useState({
    group_name: '',
    amount: 0
  });

  const handleChange = (event) => {
    setFormValue({
      ...formValue,
      [event.target.name]: event.target.value 
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const transactionData = {
      user_id: userProfileData.id,
      group_name: formValue.group_name,
      transaction_type: 'Expense',
      amount: parseFloat(formValue.amount),
      is_deleted: false
    };
     axios
     .post('/api/transactions/', transactionData)
     .then((response) => {
       useModalView.closeModal()
     })
     .catch((error) => {
       console.error("Error creating post:", error);
     });
  };



  return (
    <form className='new-expense-form' autoComplete="off" onSubmit={handleSubmit}>
      <TextField
        id='group-name'
        required
        select
        name="group_name"
        label="Group Name"
        value={formValue.group_name}
        onChange={handleChange}
        >
        {groupNames.map((type, index) => (
          <MenuItem key={index} value={type}>{type}</MenuItem>
        ))}
      </TextField>

      <TextField
        id='amount'
        required
        type="text"
        name="amount"
        label="Expense Amount"
        value={formValue.amount}
        onChange={handleChange}
      />
      <div>
        <p>*LOGO GOES HERE*</p>
      </div>
      <div className="buttons">
        <Button type="submit" className="create-expense-button" variant="contained" color="info">Post Expense</Button>
      </div>
    </form>
  );
};

export default AddExpenseForm;