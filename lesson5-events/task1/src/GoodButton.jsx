import React from 'react';
import './index.scss';

const GoodButton = () => {
  return (
    <button className="fancy-button" onClick={() => alert('Good job!')}>
      Click
    </button>
  );
};

export default GoodButton;
