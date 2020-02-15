import React from 'react';
import './App.css';
import Login from './Login';
import VideoPatient from './VideoPatient';
import Header from './Header';
import PatientView from './PatientView';
import 'bootstrap/dist/css/bootstrap.min.css';
import config from './config';
import { 
  Switch, 
  BrowserRouter as Router, 
  Route, 
  Link } from 'react-router-dom';

class App extends React.Component {

  render() {
    return (
      <div>
      <PatientView />
        <Header />
        <Router>
        <div>

            <Link to ='/VideoPatient'> Test </Link>

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
      </div>
        
      
    );
  }
}

export default App;