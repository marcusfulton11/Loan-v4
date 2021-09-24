import React from 'react';
import './App.css';
import LoanApp from './Components/Form/Form';
import Rejection from './Components/Rejection/Rejection'
import SignUp from './Components/SignUp/SignUp'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";




function App() {
  return (
    <Router>
      <Switch>
        <Route path="/Rejection">
          <Rejection />
        </Route>
        <Route path="/SignUp">
          <SignUp />
        </Route>
        <Route path="/">
          <LoanApp />
        </Route>
      </Switch>
    </Router>

  );
}

export default App;
