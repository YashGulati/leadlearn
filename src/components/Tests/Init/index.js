import React, { Component } from 'react'
import WeaponSelect from '../WeaponSelect'
import styles from '../tests.styl';

export default class Init extends Component {
  constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
  }
  onChange(weapon) {
    this.weapon = weapon;

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
          <WeaponSelect weapons={this.props.weapons} onChange={this.onChange.bind(this)} />
          <div className="buttons">
            <button type="button" onClick={this.onSubmit} value="test" className="button">TEST</button>
            <button type="button" onClick={this.onSubmit} value="testOnly " className="button">TEST ONLY</button>
          </div>
        </div>
      </div>
    )
  }
}
