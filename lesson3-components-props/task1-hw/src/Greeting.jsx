import React from 'react';
import './index.scss';
import moment from 'moment';

const getAge = bithDate => {
  const ageDifMs = Date.now() - bithDate.getTime();
  return Math.abs(new Date(ageDifMs).getFullYear() - 1970);
  // moment(bithDate).fromNow();
};

const Greeting = proprs => {
  return (
    <div className="greeting">{`My name is ${proprs.firstName} ${proprs.lastName}. I'm ${getAge(
      proprs.birthDate,
    )} years old`}</div>
  );
};

export default Greeting;
