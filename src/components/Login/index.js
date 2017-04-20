import React, { Component } from 'react';

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {username: '', password: '', error: ''}
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
      'Content-Type': 'application/json'
    },
    method: "POST",
    body: JSON.stringify({username, password})
    };
    fetch("/tokens", myInit).then((response) => {
      return response.json();
    }).then((response) => {
      console.log(response);
      // localStorage.setItem('id_token', response.id_token);
      setCookie('id_token', response.id_token);
    });

  }
  render() {
    return (
      <div style={{width: '50%', margin: '0 auto'}}>
          <h1>Login</h1>
          <p>{this.state.error}</p>
          <form onSubmit={this.onSubmit}>
            <p><label>username</label> <input type="text" name="username" onChange={this.onChange} style={{width: '30%'}} /></p>
            <p><label>password</label> <input type="text" name="password" onChange={this.onChange} style={{width: '30%'}} /></p>
            <input type="submit" />
          </form>
      </div>
    )
  }
}
