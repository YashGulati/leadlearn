import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import styles from './login.styl'
export default class Login extends Component {
  state = {username: '', password: '', error: ''}
  constructor(props) {
    super(props);
  }
  componentWillMount() {
    const token = localStorage.getItem('id_token');
    if (token) this.props.history.push('/');
  }
  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  }
  onSubmit = (e) => { const { username, password } = this.state;
    e.preventDefault();
    if (username === '' || !username) return this.setState({error: 'username empty!'});
    else if (password === '' || !password) return this.setState({error: 'password empty!'});
    else this.setState({error: ''});
    console.log(this.state);

    var myInit = {
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    method: "POST",
    body: JSON.stringify({username, password})
    };
    fetch("/tokens", myInit).then((response) => {
      return response.json();
    }).then((response) => {
      if(response.error) {
        this.setState({error: response.error});
        return;
      }
      localStorage.setItem('id_token', response.id_token);
      this.props.history.push(this.props.location.search.slice(1));
    });

  }
  render() {
    return (
      <div className="login">
          <h1>Login</h1>
          <hr />
          <p className="error">{this.state.error}</p>
          <form onSubmit={this.onSubmit}>
            <p><label>username</label> <input type="text" name="username" onChange={this.onChange} /></p>
            <p><label>password</label> <input type="text" name="password" onChange={this.onChange} /></p>
            <button type="submit">SUBMIT</button>
            <h2>or</h2>
            <p>Don't have an account?<br /><Link to="register">Create a new account</Link></p>
          </form>

      </div>
    )
  }
}
