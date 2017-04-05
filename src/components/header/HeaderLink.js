import React, { Component } from 'react'
export default class HeaderLink extends Component {
  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this)
  }
  onClick(e) {
    e.preventDefault();
    const link = this.props.children === 'home'?'':this.props.children;

    this.props.history.push(link);
  }
  render() {
     const {children} = this.props;
    return (
      <a href={children} onClick={this.onClick}><li>{children}</li></a>
    )
  }
}
