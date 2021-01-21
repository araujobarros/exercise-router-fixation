import React, { Component } from 'react';
import { BrowserRouter, Link, Route } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Users from './Users';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Route exact path='/' component={Home} />
        <Route path='/About' component={About} />
        <Route path='/users' component={Users} />
      </BrowserRouter>
    );
  }
}

export default App;