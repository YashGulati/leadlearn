import React, { Component } from 'react'
import styles from './tests.styl';

export default class Init extends Component {
  onChange(e) {
    this.props.onChange(e.target.value);
  }
  render() {
    const {weapons} = this.props;
    const markup = weapons.map((weapon)=>{
      return <option key={weapon.symbol} value={weapon.symbol}>{weapon.name}</option>;
    });
    return (
        <select name="course" onChange={this.onChange.bind(this)} defaultValue='default'>
          <option disabled value='default'> -- Select your weapon -- </option>
          {markup}
        </select>
    )
  }
}
