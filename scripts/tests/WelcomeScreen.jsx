import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

export default class WelcomeScreen extends React.Component {
  render(){
    return (
      <div>
        <center><h1>Ready, Get Set Go!</h1></center>
        <div className="container">
          <select name="course">
            <option disabled value value> -- Select your weapon -- </option>
            <option value="python">Python</option>
            <option value="java">Java</option>
            <option value="js">JavaScript</option>
            <option value="all">All</option>
          </select>
          <div className="buttons">
            <Link to='/tests/compete'>COMPETE</Link>
            <Link to='/tests/testOnly'>TEST ONLY</Link>
          </div>
        </div>
      </div>
    );
  }
}
