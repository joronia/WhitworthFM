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
		<div className="radio-feed">
		<iframe src="//p3.radiocdn.com/files/html/d6a571353c3e62a4d6eb98fc67d06746a84ae945.html" width="415px" height="135px" frameborder="0" scrolling="no" id="wavestreamingPlayer" frameBorder="0"></iframe>
		</div>
		<div className="facebookFeed">
		<iframe src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FWhitworthfm&tabs=timeline&width=415&height=500&small_header=true&adapt_container_width=true&hide_cover=true&show_facepile=false&appId" width="415px" height="90%"></iframe>
	</div>
	
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
