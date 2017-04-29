import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory, IndexRoute } from 'react-router'

import StaticBackground from './components/static_background';
import Footer from './components/footer';
import OnTheAir from './components/on_the_air';
import Podcasts from './components/podcasts';
import Contact from './components/contact';

// Main class for the React application
class App extends Component {
  constructor(props) {
    super(props);    
  }

  render() {
    return (
	  <Router history={hashHistory}>
        <Route exact path="/" component={StaticBackground}>
		  <IndexRoute component={OnTheAir}/>
		  <Route path="/podcasts" component={Podcasts} />
	      <Route path="/contact" component={Contact} />
		</Route>
      </Router>
    );
  }
}
ReactDOM.render(<App />, document.querySelector('.react-container'));
