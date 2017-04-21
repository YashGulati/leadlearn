import React, { Component } from 'react';
import {Link} from 'react-router-dom'

export default class Home extends Component {
  state = {username: '', password: '', email: '', error: ''}
  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  }
  componentWillMount() {
    const token = localStorage.getItem('id_token');
    if (token) this.props.history.push('/');
  }
  onSubmit = (e) => { const { username, password, email } = this.state;
    e.preventDefault();
    if (username === '' || !username) return this.setState({error: 'username empty!'});
    else if (email === '' || !email) return this.setState({error: 'email empty!'});
    else if (password === '' || !password) return this.setState({error: 'password empty!'});
    else this.setState({error: ''});
    console.log(this.state);

    var myInit = {
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    method: "POST",
    body: JSON.stringify({username, password, email})
    };
    fetch("/users", myInit).then((response) => {
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
      <div className="register">
          <h1>Register</h1>
          <hr />
          <p className="error">{this.state.error}</p>
          <form onSubmit={this.onSubmit}>
            <p><label>username</label> <input type="text" name="username" onChange={this.onChange} /></p>
            <p><label>Email</label> <input type="text" name="email" onChange={this.onChange} /></p>
            <p><label>Password</label> <input type="text" name="password" onChange={this.onChange} /></p>
            <button type="submit">SUBMIT</button>
            <h2>or</h2>
            <p>Don't have an account?<br /><Link to={"login" + this.props.location.search}>Create a new account</Link></p>
          </form>
      </div>
    )
  }
}
