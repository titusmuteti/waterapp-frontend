import React from 'react';
import './staffNavbar.css';

const MiniNavbar = () => {
  return (
    <nav className="mini-navbar">
      <div>
        <a href="/admin">Admin login</a>
        <a href="/staff">Staff login</a>
        <a href="tel:0700000000">Contact: 0700 000 000</a>
        <a href="email:we@makawaco.co.ke">email:we@makawaco.co.ke</a>
      </div>
    </nav>
  );
};

export default MiniNavbar;

