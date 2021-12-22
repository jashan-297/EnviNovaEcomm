import { CallMissedSharp } from '@material-ui/icons';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './Home';
import React from 'react';
import Page from './supportPage';
import Rewards from './RewardsPage';
import Signup from './signuppage';
import Profile from './profilepage';
function App() {
  return (
<React.Fragment>

    <div className="App">
   <Router>
      <div>
      
        <Switch>
          <Route path="/" exact> 
       <Home />
          </Route>
          <Route path="/support" exact>
           <Page /> 
          </Route>
          <Route path="/rewards" exact>
           <Rewards /> 
          </Route>
          <Route path="/signup" exact>
           <Signup /> 
          </Route>
          <Route path="/profile" exact>
           <Profile /> 
          </Route>
        </Switch>
      </div>
    </Router>
    </div>
    </React.Fragment>

  );
}

export default App;

