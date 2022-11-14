import React from 'react';
import './index.scss';

const Offline = props => {
  return (
    <>
      <span className="status__text">Offline</span>
      <button className="status__btn">Reconnect</button>
    </>
  );
};

export default Offline;
