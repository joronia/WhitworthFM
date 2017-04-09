import React, { Component } from 'react';
import StaticBackground from './static_background';

class OnTheAir extends Component {
  constructor(props) {
    super(props);
  }


  render() {
    return(
	  <div>
	    <StaticBackground />
        <div className="on-the-air">
          <div>Test On The Air</div>
        </div>
	  </div>
    );
  }
}

export default OnTheAir;