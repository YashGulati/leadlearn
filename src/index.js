import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import Header from './components/header';
import rest from './lib/rest';

import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';
import Tests from './components/Tests';
import Chat from './components/Chat';
import AddQuestion from './components/AddQuestion';

class App extends Component {
  state = {}
  logout = () => {
    rest.logout();
    this.forceUpdate();
  }
  render() {
    return (
      <Router>
        <div>
          <Route path='/' render={(props)=>
            <Header logout={this.logout} {...props} />
          } />
          <Route exact path='/' component={Home}/>
          <Route exact path='/login' component={Login} />
          <Route exact path='/register' component={Register}/>
          <Route exact path='/tests' component={Tests} />
          <Route exact path='/chat' component={Chat} a={this.state.a} />
          <Route exact path='/addQuestion' component={AddQuestion} />
        </div>
      </Router>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
