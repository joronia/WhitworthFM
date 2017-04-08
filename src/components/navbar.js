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

          <a href="https://twitter.com/WhitworthFM?lang=en"> <img src="src/img/twitter.png" id="twitterIcon"/> </a>
          <a href="https://www.facebook.com/Whitworthfm/?ref=br_rs"> <img src="src/img/facebook500.png" id="facebookIcon"/> </a>
          <a href="https://www.instagram.com/whitworthfm/?hl=en"> <img src="https://instagram-brand.com/wp-content/uploads/2016/11/app-icon2.png" id="instagramIcon"/> </a>

        </div>
      </div>
    </div>
  );
};


export default Navbar;
