// Spinner jsx
//       input: props or {size}
//       output: jsx
// render div with style ={ w: size, h: size }?

import React from 'react';
import './index.scss';

const Spinner = ({ size }) => {
  return <span className="spinner" style={{ width: size, height: size }}></span>;
};

export default Spinner;
