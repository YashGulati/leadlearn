import React, { Component } from 'react'
import { Link } from 'react-router-dom';
var abc = require('./header.styl');

export default class Header extends Component {
  // constructor(props) {
  //   super(props);
  // }
  componentDidMount() {
    console.log(this.props);
    console.log(abc);
  }
  render() {
    return (
      <header>
        <a href="http://leadlearn.tk"><img src="/l1.png" alt="leadlearn_logo" height="80px" /></a>
        <ul>
          <Link to="/"><li>HOME</li></Link>
          <li>COURSES</li>
          <Link to="/tests"><li>TESTS</li></Link>
          <Link to="/chat"><li>CHAT</li></Link>
          <li>EXPLORE</li>
          <li>BLOG</li>
          <li>TEAMS</li>
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
