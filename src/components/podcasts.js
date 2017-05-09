import React, { Component } from 'react';
import StaticBackground from './static_background';


class Podcasts extends Component {
  constructor(props) {
    super(props);
  }


  render() {
    return(
	  <div>	    
        <div className="podcasts">
          <div className="podcastsDesc">
          <h3> Listen to our podcasts and follow us on SoundCloud </h3>
            <h2 id="toPodcast"> <a href="https://soundcloud.com/whitworth-fm" target="_blank"> Take me to WhitworthFM SoundCloud </a></h2>
          </div>
        </div>
	  </div>
    );
  }
}

export default Podcasts;