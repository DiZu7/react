import React, { useState, useEffect } from 'react';
import classNames from 'classnames';

const ConnectionStatus = () => {
  const [status, setStatus] = useState('online');
  const divClassName = classNames('status', { status_offline: status !== 'online' });

  useEffect(() => {
    const onToggleStatus = e => {
      setStatus(e.type);
    };

    window.addEventListener('offline', onToggleStatus);
    window.addEventListener('online', onToggleStatus);

    return () => {
      window.removeEventListener('online', onToggleStatus);
      window.removeEventListener('offline', onToggleStatus);
    };
  }, []);

  return <div className={divClassName}>{status}</div>;
};

export default ConnectionStatus;
