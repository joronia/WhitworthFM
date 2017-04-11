import React, { Component } from 'react';
import StaticBackground from './static_background';

class Podcasts extends Component {
  constructor(props) {
    super(props);
  }


  render() {
    return(
	  <div>
	    <StaticBackground />
        <div className="podcasts">
          <div>Test Podcasts</div>
        </div>
	  </div>
    );
  }
}

export default Podcasts;