import React from 'react'
export default class LoginBtn extends React.Component {
  onClick = (e) => {
    e.preventDefault();
    const token = localStorage.getItem('id_token');
    if (token) return;
    if (this.props.location.pathname === '/login')
      this.props.history.push(e.target.value);
    else
      this.props.history.push(e.target.value + '?' + this.props.location.pathname);
  }
  render() {
    return (
      <button onClick={this.onClick} value='/login'>{this.props.children}</button>
    )
  }
}
