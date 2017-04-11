import React, { Component } from 'react';
import { Router, Route, hashHistory, Link } from 'react-router';

class Navbar extends Component {
  render() {
    return(
	  <div className="navbar">      
	    <div className="nav">	    
	      <ul className="nav-item-wrapper">
		    <li><Link className="nav-item" to="/">On The Air</Link></li>
		    <li><Link className="nav-item" to="/podcasts">Podcasts</Link></li>
		    <li><Link className="nav-item" to="/contact">Contact</Link></li>
	      </ul>
	    </div>    
        <Link to="/" className="logo">
          <img src='/src/img/home_logo.png'/>
        </Link> 
	  </div>
	)
  }	
}
export default Navbar;
