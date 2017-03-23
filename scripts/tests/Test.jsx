import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

var Style = {
    border: '2px solid gray',
    padding: '20px',
    width: '50%',
    height: '500px',
    margin: '0 auto'
}

export default class Test extends React.Component {
  render(){
    return (
      <div style={Style} className="test">
        <p>Welcome</p>
      </div>
    );
  }
}
