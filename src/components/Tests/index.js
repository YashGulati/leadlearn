import React, { Component } from 'react';
import Init from './Init';
import Test from './Test';
import styles from './tests.styl';

export default class Tests extends Component {
  constructor(props) {
    super(props);
    this.state = {weapon: ''};
    this.startTest = this.startTest.bind(this);
  }
  startTest(weapon) {
    console.log(weapon);
    this.setState({weapon});
  }
  render() {
    let markup;
    switch (this.state.weapon) {
      case '':
        markup = <Init onSubmit={this.startTest} />;
        break;
      case 'java':
        markup = <Test />;
        break;
      default:
        markup = <h1>Error no weapon</h1>
    }
    return (
      <div>
        {markup}
        <h1>{this.state.weapon}</h1>
      </div>
    )
  }
}
