import React, { useState, useEffect } from 'react';

const getTimeWithOffset = offset => {
  const currentTime = new Date();
  const utcOffset = currentTime.getTimezoneOffset() / 60;
  return new Date(currentTime.setHours(currentTime.getHours() + offset + utcOffset));
};

const Clock = ({ offset, location }) => {
  const [date, setDate] = useState(getTimeWithOffset(offset));

  useEffect(() => {
    const tick = () => {
      setDate(getTimeWithOffset(offset));
    };

    const interval = setInterval(() => tick(), 1000);

    return () => {
      clearInterval(interval);
    };
  });

  return (
    <div className="clock">
      <div className="clock__location">{location}</div>
      <div className="clock__time">{date.toLocaleTimeString('en-US')}</div>
    </div>
  );
};

export default Clock;
