import React, { Component } from 'react';
import StaticBackground from './static_background';

class Contact extends Component {
  constructor(props) {
    super(props);
  }


  render() {
    return(
      <div>
	    <StaticBackground />
        <div className="contact">
          <div>Test Contact</div>
        </div>
	  </div>
    );
  }
}

export default Contact;