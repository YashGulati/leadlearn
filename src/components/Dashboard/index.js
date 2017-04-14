import React, { Component } from 'react';
import Header from '../header';
import styles from './dashboard.styl';

var ReactCSSTransitionGroup = require('react-addons-css-transition-group');
export default class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.gotoTests = this.gotoTests.bind(this);
  }
  gotoTests() {
    this.props.history.push('/tests');
  }
  render() {
    const transitionOptions = {
      transitionName: "rightToLeft",
      transitionAppear: true,
      transitionAppearTimeout: 500,
      transitionEnterTimeout: 500,
      transitionLeaveTimeout: 500
    }

    return (
      <div>
        <div className="background"> </div>
        <div className="dashboard">
          <ReactCSSTransitionGroup {...transitionOptions} >
            <h1 className="dashHeading" >Tests are ready to test you.</h1>
            <button onClick={this.gotoTests}>Take a Test</button>
          </ReactCSSTransitionGroup>
        </div>
      </div>
    )
  }
}
