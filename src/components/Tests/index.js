import React, { Component } from 'react';
import Init from './Init';
import Test from './Test';
import styles from './tests.styl';

export default class Tests extends Component {
  constructor(props) {
    super(props);
    this.weapons = [
      { name: 'Python', symbol: 'python'},
      { name: 'Java', symbol: 'java'},
      { name: 'JavaScript', symbol: 'js'},
      { name: 'All', symbol: 'all'} ];
    this.state = {weapon: ''};
    this.startTest = this.startTest.bind(this);
    this.onCancel = this.onCancel.bind(this);
  }
  startTest(weapon) {
    this.setState({weapon});
  }
  onCancel() {
    this.setState({weapon: ''})
  }
  render() {
    let markup;
    if (this.state.weapon === '')
        markup = <Init onSubmit={this.startTest} weapons={this.weapons} />;
    else if (this.weapons.map(function(e) { return e.symbol; }).indexOf(this.state.weapon) > -1)
        markup = <Test weapon={this.state.weapon} onCancel={this.onCancel} />;
    else
      markup = <h1>Error no weapon</h1>;
    return (
      <div>
        {markup}
      </div>
    )
  }
}
