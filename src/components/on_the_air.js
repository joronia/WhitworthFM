import React, { Component } from 'react';
import StaticBackground from './static_background';
import Schedule from './schedule';

class OnTheAir extends Component {
  constructor(props) {
    super(props);
  }


  render() {
    return(
      <div className="on-the-air">
        <div className="player">
        </div>
        <div className="schedule">
          <Schedule />
        </div>        
      </div>
    );
  }
}

export default OnTheAir;
