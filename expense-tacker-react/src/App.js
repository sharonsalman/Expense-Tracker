
import './App.css';
import React, { useState } from 'react';
import ExpenseForm from './components/ExpenseForm';
import ExpenseItem from './components/ExpenseItem';

const App = () => {
  const [transactions, setTransactions] = useState([]);

  const addTransactionHandler = (transaction) => {
    setTransactions((prevTransactions) => [transaction, ...prevTransactions]);
  };

  const expenses = transactions.filter((transaction) => transaction.amount < 0);
  const income = transactions.filter((transaction) => transaction.amount > 0);

  return (
    <div>
      <h1>Expense Tracker</h1>
      <ExpenseForm onAddTransaction={addTransactionHandler} />

      <h2>Transactions</h2>
      <ul>
        {transactions.map((transaction) => (
          <ExpenseItem
            key={transaction.id}
            title={transaction.title}
            amount={transaction.amount}
          />
        ))}
        {income.map((incomeItem) => (
          <ExpenseItem
            key={incomeItem.id}
            title={incomeItem.title}
            amount={incomeItem.amount}
          />
        ))}
      </ul>
    </div>
  );
};

export default App;

