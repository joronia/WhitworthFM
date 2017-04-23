import React, { Component } from 'react';
import Navbar from './navbar';

// This class models the header of the page
class Header extends Component {
  constructor(props) {
    super(props);

  }

  render() {
    return (
      <div className="header">
        <Navbar page={this.props.page}/>
        <div className="logo">
          <img src='/src/img/Long_White_Transparent.png'/>
        </div>
        <div className="social-icons">
          <ul>
            <li> <a href="https://www.facebook.com/Whitworthfm/"> <img src='/src/img/facebook.png'/></a></li>
            <li> <a href="https://twitter.com/whitworthfm?lang=en"> <img src='/src/img/twitter.png'/> </a></li>
            <li> <a href="https://www.instagram.com/whitworthfm/"> <img src='/src/img/instagram.png'/></a></li>
          </ul>
        </div>
      </div>
    )
  }
}

export default Header;
