import React from 'react';
import ReactDOM from 'react-dom';
import WelcomeScreen from './tests/WelcomeScreen.jsx';
import Test from './tests/Test.jsx';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

class App extends React.Component {
  render(){
    return (
      <Router>
        <div>
          <Route exact path="/tests" component={WelcomeScreen}/>
          <Route exact path="/tests/testOnly" component={Test}/>
        </div>
      </Router>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('app')
);
