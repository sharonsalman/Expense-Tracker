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

    if (title.trim() === '' || amount.trim() === '') {
      return;
    }

    const newTransaction = {
      id: Math.random().toString(), 
      title: title,
      amount: +amount,
    };

    props.onAddTransaction(newTransaction);

    setTitle('');
    setAmount('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Title</label>
        <input type="text" value={title} onChange={handleTitleChange} />
      </div>
      <div>
        <label>Amount</label>
        <input type="number" value={amount} onChange={handleAmountChange} />
      </div>
      <div>
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
      <button type="submit">Add Transaction</button>
    </form>
  );
};

export default ExpenseForm;
