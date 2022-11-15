// Login jsx
//      input: props or {onLogin}
//      output: jsx
// render button with text Login and onClick={onLogin}

import React from 'react';
import './index.scss';

const Login = ({ onLogin }) => {
  return (
    <button className="login btn" onClick={onLogin}>
      Login
    </button>
  );
};

export default Login;
