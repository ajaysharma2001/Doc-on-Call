import React from 'react';

import { OTSubscriber } from 'opentok-react';
import CheckBox from './CheckBox';
import '../Video.css';

class Subscriber extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      error: null,
      audio: true,
      video: true
    };
  }

  setAudio = (audio) => {
    this.setState({ audio });
  }

  setVideo = (video) => {
    this.setState({ video });
  }

  onError = (err) => {
    this.setState({ error: `Failed to subscribe: ${err.message}` });
  }

  render() {
    return (
      <div className="subscriber">

        {this.state.error ? <div id="error">{this.state.error}</div> : null}
        
        <div id = 'Contains_Sub'>
        <OTSubscriber
          properties={{
            subscribeToAudio: this.state.audio,
            subscribeToVideo: this.state.video,
            height: '489px',
            width: '600px',
          }}
          onError={this.onError}
        />
        </div>
      </div>
    );
  }
}
export default Subscriber;