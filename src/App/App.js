import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
 
import './App.css';

import SignIn from '../Screens/SignIn/SignIn';
import Home from '../Screens/Home/Home';
import * as ROUTES from '../Constants/Routes';

function App() {

  return (
    <Router>
      <Switch>
        <Route exact path={ROUTES.HOME} component={Home} />
        <Route exact path={ROUTES.SIGN_IN} component={SignIn} />
      </Switch>
    </Router>
  );
}

export default App;
