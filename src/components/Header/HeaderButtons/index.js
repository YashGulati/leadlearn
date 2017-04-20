import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
var styles = require('./headerButtons.styl');
export default class Header extends Component {
  constructor(props) {
    super(props);
  }
  onClick = (e) => {
    e.preventDefault();
    const token = localStorage.getItem('id_token');
    console.log(token);
    if (token) return;
    this.props.history.push(e.target.value + '?' + this.props.location.pathname);
  }
  render() {
    return (
      <div className="headerButtons">
        <button onClick={this.onClick} name="button" className="button" href="#" value="/login">Log in</button>
        <button onClick={this.onClick} name="button" className="green" href="#" value="/register">REGISTER</button>
      </div>
    )
  }
}
