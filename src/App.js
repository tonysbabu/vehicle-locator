import React from 'react';
import './App.scss';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import Login from './components/Auth/Login';
import Dashboard  from './components/Dashboard/Dashboard';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';


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
      <ToastContainer />
    </div>
  );
}

export default App;
