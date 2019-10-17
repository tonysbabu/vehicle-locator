import React from 'react';
import logo from './logo.svg';
import './App.scss';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Login from './components/Login';
import { Dashboard } from './components/Dashboard';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/dashboard">
              <Dashboard />
          </Route>
          <Route path="/">
              <Login />
          </Route>
        </Switch>
      </Router>
      
    </div>
  );
}

export default App;
