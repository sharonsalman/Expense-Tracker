import React, { useState } from 'react';

const ExpenseForm = (props) => {
  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState('');
  const [type, setType] = useState('expense'); // Default to 'expense'

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleAmountChange = (event) => {
    setAmount(event.target.value);
  };

  const handleTypeChange = (event) => {
    setType(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Create the transaction object
    const transaction = {
      id: Math.random().toString(),
      title,
      amount: parseFloat(amount),
      type, // Use the selected type (income or expense)
    };

    // Call the onAddTransaction function from props and pass the transaction details
    props.onAddTransaction(transaction);

    // Clear the form fields
    setTitle('');
    setAmount('');
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <div className="form-control">
        <label>Title</label>
        <input type="text" value={title} onChange={handleTitleChange} />
      </div>
      <div className="form-control">
        <label>Amount</label>
        <input type="number" value={amount} onChange={handleAmountChange} />
      </div>
      <div className="form-control">
        <label>Type:</label>
        <label>
          <input
            type="radio"
            value="expense"
            checked={type === 'expense'}
            onChange={handleTypeChange}
          />
          Expense
        </label>
        <label>
          <input
            type="radio"
            value="income"
            checked={type === 'income'}
            onChange={handleTypeChange}
          />
          Income
        </label>
      </div>
      <button className="btn" type="submit">
        Add Transaction
      </button>
    </form>
  );
};

export default ExpenseForm;
