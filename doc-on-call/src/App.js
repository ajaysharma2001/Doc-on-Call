import React from 'react';
import './App.css';
import VideoPatient from './VideoPatient';
import Login from './Login';
import { 
  Switch, 
  BrowserRouter as Router, 
  Route, 
  Link } from 'react-router-dom';

class App extends React.Component {

  render() {
    return (
      <div>
        <Login />
        <Router>
        <div>


            <Link to ='/VideoPatient'>test</Link>


        </div>
        <Switch>
          <Route path="/VideoPatient">
            <VideoPatient />
          </Route>
        </Switch>
      </Router>
      </div>
      
    );
  }
}

export default App;