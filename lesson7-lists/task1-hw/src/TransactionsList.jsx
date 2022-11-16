import React from 'react';
import './index.scss';
import Transaction from './Transaction';

const TransactionsList = ({ transactions }) => {
  return (
    <ul className="transactions">
      {transactions.map(transaction => (
        <Transaction key={transaction.id} {...transaction} />
      ))}
    </ul>
  );
};
export default TransactionsList;
