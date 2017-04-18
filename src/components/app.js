import React, { Component } from 'react';
import StaticBackground from './staticbackground';

class App extends Component {
  render() {
	return (
	  <div>
		<StaticBackground />
		{ this.props.children }
      </div>
	);
  }
}

export default App