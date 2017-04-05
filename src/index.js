import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Header from './components/header';
// import Dashboard from './components/dashboard';
import Home from './components/Home';
import Tests from './components/Tests';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

const App = () => {
  return (
    <Router>
      <div>
        <Route path='/' component={Header} />
        <Route exact path='/' component={Home} />
        <Route exact path='/tests' component={Tests} />
      </div>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'));
