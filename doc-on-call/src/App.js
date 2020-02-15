import React from 'react';
import './App.css';
import Login from './Login';
import VideoPatient from './VideoPatient'
import config from './config';
import { 
  Switch, 
  BrowserRouter as Router, 
  Route, 
  Link } from 'react-router-dom';

class App extends React.Component {

  render() {
    return (
        <Router>
        <div>

            <Link to ='/VideoPatient'>test</Link>

        </div>
        <Switch>
          <Route exact path="/VideoPatient" component>
          <VideoPatient
            apiKey={config.API_KEY}
            sessionId={config.SESSION_ID}
            token={config.TOKEN}></VideoPatient>
          </Route>

          <Route>
            <Login />
          </Route>


        </Switch>
      </Router>
      
    );
  }
}

export default App;