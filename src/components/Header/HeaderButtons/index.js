import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
var styles = require('./headerButtons.styl');
export default class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {token: ''};
  }
  onClick = (e) => {
    e.preventDefault();
    const token = this.state.token;
    if (token) return;
    if (this.props.location.pathname === '/login')
      this.props.history.push(e.target.value);
    else
      this.props.history.push(e.target.value + '?' + this.props.location.pathname);
  }
  logout = (e) => {
    e.preventDefault();
    localStorage.removeItem('id_token');
    this.props.logout();
    this.forceUpdate();
  }
  componentWillUpdate() {
    if (this.state.token != localStorage.getItem('id_token'))
    this.setState({token: localStorage.getItem('id_token')});
 }
 render() {
    let markup;
    if (!this.state.token) {
      markup = (
        <div>
        <button onClick={this.onClick} name="button" className="button" href="#" value="/login">Log in</button>
        <button onClick={this.onClick} name="button" className="green" href="#" value="/register">REGISTER</button>
      </div>
      );
    }
    else {
      markup = (
        <div>
        <button onClick={this.logout} name="button" className="button" href="#" value="/login">Log out</button>
        <button onClick={this.onClick} name="button" className="green" href="#" value="/register">PROFILE</button>
        </div>
      );
    }
    return (
      <div className="headerButtons">
        {markup}
      </div>
    )
  }
}
