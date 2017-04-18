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
          <img src='/src/img/home_logo.png'/>            
        </div>
      </div>
    )
  }
}

export default Header;
