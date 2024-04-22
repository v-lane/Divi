import React, { useState } from "react";
import '/src/styles/AddExpenseForm.scss';
import { Button, MenuItem, TextField, Alert } from "@mui/material";
import axios from 'axios';

const AddExpenseForm = (props) => {
  const { userProfileData, useModalView, group, setTransactions, activeGroupDetails } = props;
  const groupNames = activeGroupDetails.name ? [activeGroupDetails.name] : group.map((item) => item.name);

  const [formValue, setFormValue] = useState({
    group_name: '',
    amount: ''
  });
  const [formError, setFormError] = useState(null);

  const handleClose = () => {
    setFormError(null);
  };

  const handleChange = (event) => {
    setFormValue({
      ...formValue,
      [event.target.name]: event.target.value
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    let groupLength = 10;

    if (activeGroupDetails.users) {
      groupLength = activeGroupDetails.users.length
    }

    if (formValue.amount < groupLength) {
      setFormError(`Expense Amount must be greater than $ ${groupLength}.00`);

    } else {
      const transactionData = {
        user_id: userProfileData.id,
        group_name: activeGroupDetails.name ? activeGroupDetails.name : formValue.group_name,
        transaction_type: 'Expense',
        amount: parseFloat(formValue.amount),
        is_deleted: false
      };
      axios
        .post('/api/transactions/', transactionData)
        .then((response) => {
          axios.get(`/api/transactions/${userProfileData.id}`)
            .then((res) => setTransactions(res.data))
            .then(useModalView.closeModal());
        })
        .catch((error) => {
          console.error("Error creating post:", error);
        });
    }
  };

  return (
    <form className='new-expense-form' autoComplete="off" onSubmit={handleSubmit}>

      {formError && <Alert severity="error" onClose={handleClose}>
        {formError}
      </Alert>}

      <TextField
        id='group-name'
        required
        select
        name="group_name"
        label="Group Name"
        value={activeGroupDetails.name ? activeGroupDetails.name : formValue.group_name}
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
      <p className="disclaimer">+ Posting an expense will split the cost evenly between all group members, including yourself.</p>
      <p className="disclaimer">&nbsp; [ Example: a $10 payment to a group with 4 members will assign $2.50 to each other member ]</p>
      <div>
        <p className="logo"> DIVI</p>
      </div>
      <div className="buttons">
        <Button type="submit" className="create-expense-button" variant="contained" color="info">Post Expense</Button>
      </div>
    </form>
  );
};

export default AddExpenseForm;