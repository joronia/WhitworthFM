import React, { Component } from 'react';
import Header from './header.js';

// This class will model the radio component
class StaticBackground extends Component {
  constructor(props) {
    super(props);
  }


  render() {
    return(
      <div className="background">
        <Header />	
        <div className = "content">
          { this.props.children } 
        </div>
      </div>	  	    
    );
  }
}

export default StaticBackground;
