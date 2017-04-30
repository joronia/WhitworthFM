import React, { Component } from 'react';
import StaticBackground from './static_background';

class Contact extends Component {
  constructor(props) {
    super(props);
  }


  render() {
    return(
      <div>
        <div className="contact">
          <div>Test Contact</div>
		  <div className="contactBox">
			<div className="joinTeam">
				<h1> Join The Team </h1>
			</div>
			<div className="downloadForm">
				<h4> Download Add/Drop Form </h4>
				<h3> Or </h3>
				<h3 id="gmEmail"> Email the Whitworth GM at <b><a href="mailto:gm.whitworth.fm@gmail.com"> gm.whitworth.fm@gmail.com</a></b> </h3>
			</div>
		  </div>
        </div>
	  </div>
    );
  }
}

export default Contact;