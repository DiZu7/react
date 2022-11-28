import React from 'react';
import { Link } from 'react-router-dom';

import './index.scss';

const PageNotFound = () => {
  return (
    <div className="page__content">
      <h1>😢</h1>
      <Link to="/">Go home</Link>
    </div>
  );
};

export default PageNotFound;
