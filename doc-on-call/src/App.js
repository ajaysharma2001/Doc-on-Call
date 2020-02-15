import React from 'react';
import './App.css';
import VideoPatient from './VideoPatient';
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

            <Link to ='/VideoPatient'></Link>
            
        </div>
        <Switch>
          <Route path="/VideoPatient">
            <VideoPatient />
          </Route>
        </Switch>
      </Router>
    );
  }
}

export default App;