import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import Header from './components/header';
import rest from './lib/rest';

import Home from './components/Home';
import Tests from './components/Tests';
import AddQuestion from './components/AddQuestion';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route path='/' component={Header} getAuth={rest.getAuth} />
          <Route exact path='/' component={Home}/>
          <Route exact path='/tests' component={Tests} />
          <Route exact path='/addQuestion' component={AddQuestion} />
        </div>
      </Router>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
