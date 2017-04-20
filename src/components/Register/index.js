import React, { Component } from 'react';

export default class Home extends Component {
  state = {error: ''}
  render() {
    return (
      <div style={{width: '50%', margin: '0 auto'}}>
          <h1>Register</h1>
          <p className="error">{this.state.error}</p>
          <form onSubmit={this.onSubmit}>
            <p><label>username</label> <input type="text" name="username" onChange={this.onChange} style={{width: '30%'}} /></p>
            <p><label>Email</label> <input type="text" name="email" onChange={this.onChange} style={{width: '30%'}} /></p>
            <p><label>Password</label> <input type="text" name="password" onChange={this.onChange} style={{width: '30%'}} /></p>
            <input type="submit" />
          </form>
      </div>
    )
  }
}
