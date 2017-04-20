import React, { Component } from 'react';
import StaticBackground from './static_background';
import Schedule from './schedule';

class Podcasts extends Component {
  constructor(props) {
    super(props);
  }


  render() {
    return(
	  <div>	    
        <div className="podcasts">
          <Schedule />
        </div>
	  </div>
    );
  }
}

export default Podcasts;