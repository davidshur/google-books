import React from "react";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Saved from './components/Saved';
import Search from './components/Search';
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from './components/Navigation';

const App = () => (
  <Router>
    <Navigation />
    <Switch>
      <Route exact path='/' component={Search} />
      <Route exact path='/saved' component={Saved} />
    </Switch>
  </Router>
);


export default App;
