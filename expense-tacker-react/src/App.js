import React, { useState } from 'react';
import './App.css'; // Import the CSS file with the provided styles
import ExpenseForm from './components/ExpenseForm';
import ExpenseItem from './components/ExpenseItem';

const App = () => {
  const [transactions, setTransactions] = useState([]);

  const addTransactionHandler = (transaction) => {
    setTransactions((prevTransactions) => [transaction, ...prevTransactions]);
  };

  const expenses = transactions.filter((transaction) => transaction.type === 'expense');
  const income = transactions.filter((transaction) => transaction.type === 'income');

  return (
    <div className="container">
      <h1>Expense Tracker</h1>
      <ExpenseForm onAddTransaction={addTransactionHandler} />
      <h3>Expenses</h3>
      <ul className="list">
        {expenses.map((transaction) => (
          <ExpenseItem
            key={transaction.id}
            title={transaction.title}
            amount={transaction.amount}
            type={transaction.type}
          />
        ))}
      </ul>
      <h3>Income</h3>
      <ul className="list">
        {income.map((transaction) => (
          <ExpenseItem
            key={transaction.id}
            title={transaction.title}
            amount={transaction.amount}
            type={transaction.type}
          />
        ))}
      </ul>
    </div>
  );
};

export default App;
