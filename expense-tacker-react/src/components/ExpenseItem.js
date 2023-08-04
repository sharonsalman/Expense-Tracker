import React from 'react';

const ExpenseItem = (props) => {
  const { title, amount, type } = props;

  return (
    <li className={`list-item ${type === 'expense' ? 'minus' : 'plus'}`}>
      <div className="expense-item">
        <h4>{title}</h4>
        <div className={`money ${type === 'expense' ? 'minus' : 'plus'}`}>
          {type === 'expense' ? '-' : '+'}${amount.toFixed(2)}
        </div>
        <button className="delete-btn">x</button>
      </div>
    </li>
  );
};

export default ExpenseItem;
