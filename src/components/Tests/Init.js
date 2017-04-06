import React, { Component } from 'react'
import styles from './tests.styl';

export default class Init extends Component {
  constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
  }
  onChange(e) {
    this.weapon = e.target.value;

  }
  onSubmit(e) {
    if(!this.weapon) { console.log('Weapon not select and submitted'); return false; }
    this.props.onSubmit(this.weapon);
  }
  render() {
    return (
      <div>
        <h1 className='testsHeading'>Ready, Get Set Go!</h1>
        <div className="container">
          <select name="course" onChange={this.onChange.bind(this)}>
            <option disabled selected defaultValue value> -- Select your weapon -- </option>
            <option value="python">Python</option>
            <option value="java">Java</option>
            <option value="js">JavaScript</option>
            <option value="all">All</option>
          </select>
          <div className="buttons">
            <button type="button" onClick={this.onSubmit} value="test" className="button">TEST</button>
            <button type="button" onClick={this.onSubmit} value="testOnly " className="button">TEST ONLY</button>
          </div>
        </div>
      </div>
    )
  }
}
