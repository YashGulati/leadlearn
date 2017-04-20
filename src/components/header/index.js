import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import HeaderLink from './HeaderLink/index.js';
import HeaderButtons from './HeaderButtons';
var styles = require('./header.styl');

export default class Header extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const headerLinksArr = [
      'home', 'courses', 'tests', 'chat', 'explore'
    ];
    const headerLinks = headerLinksArr.map((headerLinkName, idx)=>{
      return <HeaderLink history={this.props.history} key={idx} >{headerLinkName}</HeaderLink>
    })
    return (
      <header>
        <Link to="/"><img src="/l1.png" alt="leadlearn_logo" height="80px" /></Link>
        <ul> {headerLinks} </ul>
        <HeaderButtons />
        {/* <div className="buttons">
          <% if(loggedIn === 0){ %>

          <% } else { %>
            <a name="button" class="button" href="#" onclick="profile()">Profile</a>
            <a name="button" class="button" href="#" onclick="logout()">Log out</a>
            <div class="profile"></div>
          <% } %>
        </div> */}
      </header>
    )
  }
}
