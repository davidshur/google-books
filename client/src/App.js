import React from "react";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Saved from './components/Saved';
import Search from './components/Search';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Header from './components/Header';
import Navigation from './components/Navigation';

const App = () => (
  <Router>
    <Navigation />
    <Container>
    <Header />
    <Switch>
      <Route exact path='/' component={Search} />
      <Route exact path='/saved' component={Saved} />
    </Switch>

    </Container>
  </Router>
);


export default App;
