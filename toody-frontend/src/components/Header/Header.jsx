import React from 'react';
import toody from '../../images/toody.svg';
import './Header.css';

const Header = () => {
  return (
    <div className="header">
      <div className="navbar">
        <a href="/">
          <div className="logo">
            <img src={toody} alt="" />
            Toody
          </div>
        </a>
        <a href="/profile" className="profile-link">
          My Profile
        </a>
      </div>
    </div>
  );
};

export default Header;
