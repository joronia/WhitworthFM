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
		  <div className="contactBox">
			<div className="joinTeam">
				<h1><b> Join The Team </b> </h1>
			</div>
			<div className="downloadForm">
				<h4> <img src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIEZpcmV3b3JrcyAxMCwgRXhwb3J0IFNWRyBFeHRlbnNpb24gYnkgQWFyb24gQmVhbGwgKGh0dHA6Ly9maXJld29ya3MuYWJlYWxsLmNvbSkgLiBWZXJzaW9uOiAwLjYuMSAgLS0+DQo8IURPQ1RZUEUgc3ZnIFBVQkxJQyAiLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4iICJodHRwOi8vd3d3LnczLm9yZy9HcmFwaGljcy9TVkcvMS4xL0RURC9zdmcxMS5kdGQiPg0KPHN2ZyBpZD0iVW50aXRsZWQtUGFnZSUyMDEiIHZpZXdCb3g9IjAgMCAyNyAxOCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6I2ZmZmZmZjAwIiB2ZXJzaW9uPSIxLjEiDQoJeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSINCgl4PSIwcHgiIHk9IjBweCIgd2lkdGg9IjI3cHgiIGhlaWdodD0iMThweCINCj4NCgk8ZyBpZD0iTGF5ZXIlMjAxIj4NCgkJPHBhdGggZD0iTSAxLjQ2ODggMSBMIDEzLjUgMTYuNSBMIDI1LjUxNTYgMSBMIDI1LjY0MDYgMC44NDM4ICIgc3Ryb2tlPSIjZmZmZmZmIiBzdHJva2Utd2lkdGg9IjIiIGZpbGw9Im5vbmUiLz4NCgk8L2c+DQo8L3N2Zz4="/> <a target="_blank" id="formLink" href="https://www.whitworth.edu/Administration/RegistrarsOffice/Forms/PDF/AddDrop.pdf">  Download Add/Drop Form </a></h4>
				<h3 id="or"> Or </h3>
				<h3 id="gmEmail"> Email the Whitworth GM at <b><a href="mailto:gm.whitworth.fm@gmail.com"> gm.whitworth.fm@gmail.com</a></b> </h3>
			</div>
		  </div>
        </div>
	  </div>
    );
  }
}

export default Contact;