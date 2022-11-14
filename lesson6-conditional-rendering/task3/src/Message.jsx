import React from 'react';
import './index.scss';

const Message = props => {
  if (!props.text) {
    return null;
  }
  return <div className="message">{props.text}</div>;
};

export default Message;
