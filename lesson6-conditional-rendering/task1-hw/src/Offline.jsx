import React from 'react';
import './index.scss';

const Offline = ({ goOnline }) => {
  return (
    <>
      <span className="status__text">Offline</span>
      <button className="status__btn" onClick={goOnline}>
        Reconnect
      </button>
    </>
  );
};

export default Offline;
