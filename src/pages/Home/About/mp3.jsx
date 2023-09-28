import React, { Component } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faCirclePlay,
  faCirclePause,
} from "@fortawesome/free-regular-svg-icons";
import { faHeadphones } from "@fortawesome/free-solid-svg-icons";

library.add(faHeadphones, faCirclePlay, faCirclePause);


class Mp3 extends Component {
  // Create state
  state = {
    // Get audio file in a variable
    audio: new Audio("assets/mp3/Michael-Jackson-Heal-The-World-(Gospeljingle.com).mp3"),

    // Set initial state of song
    isPlaying: false,
  };

  // Main function to handle both play and pause operations
  playPause = () => {
    // Get state of song
    let isPlaying = this.state.isPlaying;

    if (isPlaying) {
      // Pause the song if it is playing
      this.state.audio.pause();
    } else {
      // Play the song if it is paused
      this.state.audio.play();
    }

    // Change the state of song
    this.setState({ isPlaying: !isPlaying });
  };

  render() {
    return (
        <div onClick={this.playPause}>
          <p className="p_play">
            {this.state.isPlaying ? (
              <span className="play_button">
                <FontAwesomeIcon icon={faCirclePause} className="pauseIcon" />
              </span>
            ) : (
              <span className="play_button">
                <FontAwesomeIcon icon={faCirclePlay} className="playIcon" />
              </span>
            )}
          </p>
        </div>
    );
  }
}

export default Mp3;
