import React from 'react';
import moment from 'moment';
import './index.scss';

const formatDate = time => moment(time).format('D MMM');
const formatTime = time => moment(time).format('HH:mm');
// const formatCurrency = amount => new Intl.NumberFormat('en-GB').format(amount);

const Transaction = ({ from, to, amount, rate, time }) => {
  return (
    <li className="transaction">
      <span className="transaction__date">{formatDate(time)}</span>
      <span className="transaction__time">{formatTime(time)}</span>
      <span className="transaction__assets">
        {from} → {to}
      </span>
      <span className="transaction__rate">{rate}</span>
      <span className="transaction__amount">{new Intl.NumberFormat('en-GB').format(amount)}</span>
    </li>
  );
};

export default Transaction;
