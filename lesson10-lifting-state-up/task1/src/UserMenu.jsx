import React from 'react';
import './index.scss';

const UserMenu = ({ userData }) => {
  if (!userData) {
    return null;
  }

  const { name, avatar_url } = userData;
  return (
    <div className="menu">
      <span className="menu__greeting">{`Hello, ${name}`}</span>
      <img alt="User Avatar" src={avatar_url} className="menu__avatar" />
    </div>
  );
};

export default UserMenu;
