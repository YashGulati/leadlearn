import React, { Component } from 'react'
import styles from './tests.styl';

export default class Dashboard extends Component {
  onSubmit(e) {
    e.preventDefault();
    
  }
  render() {
    return (
      <div>
        <h1 className='testsHeading'>Ready, Get Set Go!</h1>
        <form className="container" onSubmit={this.onSubmit} >
          <select name="course" onChange={this.weaponChange}>
            <option disabled selected defaultValue value> -- Select your weapon -- </option>
            <option value="python">Python</option>
            <option value="java">Java</option>
            <option value="js">JavaScript</option>
            <option value="all">All</option>
          </select>
          <div className="buttons">
            <button type="submit" className="button">TEST</button>
            <button type="button" className="button">TEST ONLY</button>
          </div>
        </form>
      </div>
    )
  }
}
