import React from 'react';
import './App.css';
import LoanApp from './Components/Form/Form';
import Rejection from './Components/Rejection/Rejection'
import SignUp from './Components/SignUp/SignUp'
import Main from './Components/LandingPage/Main/Main';
import Contact from './Components/Contact/Contact';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Navbar from './Components/LandingPage/navBar/nav';




function App() {
  return (
     <Router>
      <Navbar />
      <Switch>
        <Route path="/Rejection">
          <Rejection />
        </Route>
        <Route path="/SignUp">
          <SignUp />
        </Route>
        <Route path="/LoanApp">
          <LoanApp />
        </Route>
        <Route path="/Contact">
          <Contact />
        </Route>
        <Route path="/">
          <Main />
        </Route>
      </Switch>
    </Router>

    

  );
}

export default App;
