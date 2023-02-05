import React from 'react';
import './index.scss';
import Online from './Online';
import Offline from './Offline';

const Status = ({ isOnline }) => {
  return <div className="status">{isOnline ? <Online /> : <Offline />}</div>;
};

export default Status;
