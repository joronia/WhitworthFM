import React from 'react';
import NavbarButton from './navbar_button';

// This function models the navbar
const Navbar = (props) => {
  return (
    <div className="navbar">
      <div className="nav-header logo">
        <img src='/src/img/home_logo.png'/>
      </div>
      <div>
        <div className="nav">
          <a >On The Air</a>
          <a >Podcasts</a>
          <a >Contact</a>
        </div>
      </div>
    </div>
  );
};


export default Navbar;
