import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
var styles = require('./headerButtons.styl');
export default class Header extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="headerButtons">
        <Link to="/login" name="button" className="button" href="/login">Log in</Link>
        <Link to="/register" name="button" className="green" href="/register">REGISTER</Link>
      </div>
    )
  }
}
