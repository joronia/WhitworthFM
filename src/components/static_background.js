import React, { Component } from 'react';
import Header from './header.js';

// This class will model the radio component
class StaticBackground extends Component {
  constructor(props) {
    super(props);

    this.state = {
      playPause: true
    };

    this.onPlayPauseClick = this.onPlayPauseClick.bind(this);
  }

  onPlayPauseClick() {
    this.setState({ playPause: !this.state.playPause });
    console.log(this.state.playPause);
    if(this.state.playPause === true)
      document.getElementById("play-pause-img").src="/src/img/radio_pause.png"
    else
      document.getElementById("play-pause-img").src="/src/img/radio_play.png"
  }


  render() {
    return(
      <div className="background">
        <Header />
        <div className = "content">
          { this.props.children }
        </div>
        <div className="bottom-bar">
          <div className="radio-play-pause">
            <img id="play-pause-img" src='/src/img/radio_play.png' onClick={this.onPlayPauseClick}/>
          </div>
        </div>
      </div>
    );
  }
}

export default StaticBackground;
