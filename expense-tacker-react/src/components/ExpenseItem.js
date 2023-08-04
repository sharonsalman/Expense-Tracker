import React from 'react';

const ExpenseItem = (props) => {
  return (
    <li>
      <h2>{props.title}</h2>
      <div>{props.amount}</div>
    </li>
  );
};

export default ExpenseItem;
