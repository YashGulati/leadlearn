import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import HeaderLink from './HeaderLink'
var styles = require('./header.styl');
var ReactCSSTransitionGroup = require('react-addons-css-transition-group');
export default class Header extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <header>
        <Link to="/"><img src="/l1.png" alt="leadlearn_logo" height="80px" /></Link>
        <ul>
          <HeaderLink history={this.props.history} >home</HeaderLink>
          <HeaderLink history={this.props.history} >courses</HeaderLink>
          <HeaderLink history={this.props.history} >tests</HeaderLink>
          <HeaderLink history={this.props.history} >chat</HeaderLink>
          <HeaderLink history={this.props.history} >explore</HeaderLink>
        </ul>
        {/* <div className="buttons"> */}
          {/* <% if(loggedIn === 0){ %>
            <a name="button" class="button" href="/login">Log in</a>
            <a name="button" class="green" href="/register">REGISTER</a>
          <% } else { %>
            <a name="button" class="button" href="#" onclick="profile()">Profile</a>
            <a name="button" class="button" href="#" onclick="logout()">Log out</a>
            <div class="profile"></div>
          <% } %> */}
        {/* </div> */}
      </header>
    )
  }
}
