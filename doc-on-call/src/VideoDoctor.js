import React from 'react';
import './App.css';
import { OTSession, OTStreams, preloadScript } from 'opentok-react';
import ConnectionStatus from './components/ConnectionStatus';
import Publisher from './components/Publisher';
import Subscriber from './components/Subscriber';
import './Video.css';
import {
  Badge,
  Button,
  ButtonDropdown,
  ButtonGroup,
  ButtonToolbar,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  CardTitle,
  Col,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Progress,
  Row,
  Table,
} from 'reactstrap';

class VideoPatient extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      connected: false
    };
    this.sessionEvents = {
      sessionConnected: () => {
        this.setState({ connected: true });
      },
      sessionDisconnected: () => {
        this.setState({ connected: false });
      }
    };
  }

  onError = (err) => {
    this.setState({ error: `Failed to connect: ${err.message}` });
  }

  render() {
    return (
      <div>
      <OTSession
        apiKey={this.props.apiKey}
        sessionId={this.props.sessionId}
        token={this.props.token}
        eventHandlers={this.sessionEvents}
        onError={this.onError}
        >

        {this.state.error ? <div id="error">{this.state.error}</div> : null}

        <Row>
        <Col>
        </Col>
        <div id = 'Publisher_Screen'>
        <Publisher />
        </div>
        <Col>
        </Col>
        <OTStreams >
        <div id = 'Subscriber_Screen'>
          <Subscriber />
          </div>
        </OTStreams>
        <Col>
        </Col>
        </Row>
      </OTSession>
      <br />
      <br />
      <br />
      </div>

    );
  }
}

export default preloadScript(VideoDoctor);