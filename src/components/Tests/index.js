import React, { Component } from 'react'
import Init from './Init'
import styles from './tests.styl';

export default class Tests extends Component {
  constructor(props) {
    super(props);
    this.weapon = '';
  }
  onSubmit(e) {
    e.preventDefault();
  }
  render() {
    return (
      <div>
        <Init />
      </div>
    )
  }
}
