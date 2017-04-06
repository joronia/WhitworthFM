import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Header from './components/header';
import Footer from './components/footer';
import RadioPlayer from './components/radio_player';

// Main class for the React application
class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      curPage: null
    };
  }

  render() {
    return (
	// -> The header object is rendered
      <div>
        <Header /> 
        <RadioPlayer /> // -> The radio gets rendered
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector('.react-container'));
