import React, { useState, useEffect } from 'react';
import Spinner from './Spinner';
import './index.scss';

const withDataLoader = url => WrappedComponent => {
  return () => {
    const [data, setData] = useState(null);

    useEffect(() => {
      fetch(url)
        .then(response => {
          if (!response.ok) {
            throw new Error('Failed request');
          }
          return response.json();
        })
        .then(data => setData(data));
    }, [url]);

    return !data ? <Spinner /> : <WrappedComponent data={data} />;
  };
};

export default withDataLoader;
