import React from 'react';
import { OTPublisher } from 'opentok-react';
import CheckBox from './CheckBox';
import '../Video.css'

const styles = {

  publisherWindow: {

    height: '230px',

    width: '500px',

    style: { buttonDisplayMode: 'off' },

  },

};

class Publisher extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      error: null,
      audio: true,
      video: true,
      videoSource: 'camera'
    };
  }

  setAudio = (audio) => {
    this.setState({ audio });
  }

  setVideo = (video) => {
    this.setState({ video });
  }

  changeVideoSource = (videoSource) => {
    (this.state.videoSource !== 'camera') ? this.setState({videoSource: 'camera'}) : this.setState({ videoSource: 'screen' })
  }

  onError = (err) => {
    this.setState({ error: `Failed to publish: ${err.message}` });
  }

  render() {
    return (
      <div id="publisher">
        {this.state.error ? <div id="error">{this.state.error}</div> : null}
        <div id = 'Contains_Pub'>
        <OTPublisher
          properties={{
            publishAudio: this.state.audio,
            publishVideo: this.state.video,
            videoSource: this.state.videoSource === 'screen' ? 'screen' : undefined,
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
export default Publisher;