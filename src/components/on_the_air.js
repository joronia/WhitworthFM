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
        <iframe src="//p3.radiocdn.com/files/html/d6a571353c3e62a4d6eb98fc67d06746a84ae945.html" width="450px" height="135px" frameborder="0" scrolling="no" id="wavestreamingPlayer"></iframe>
        </div>       
        <div className="schedule"> 
		  <h1> Schedule </h1>
          <Schedule />
        </div>        
      </div>
    );
  }
}

export default OnTheAir;
