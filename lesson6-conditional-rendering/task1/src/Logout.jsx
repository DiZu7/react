import React from 'react';
import './index.scss';

const Logout = props => {
    return (
      <button className="btn logout" onClick={props.onLogout}>
        Logout
      </button>
    );
};

export default Logout;
