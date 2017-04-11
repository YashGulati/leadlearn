import React, { Component } from 'react';
import styles from './index.styl';

export default class Result extends Component {
  render() { const { right, wrong, unAttended } = this.props,
  totalQuestions = right + wrong + unAttended,
  percentage = (right * 100/totalQuestions).toFixed(1);
    return (
      <div className="result">
          <h1 className="resultHeading">Result</h1>
          <p>Total: <span>{totalQuestions}</span></p>
          <p>Right: <span>{right}</span></p>
          <p>Wrong: <span>{wrong}</span></p>
          <p>Not Attended: <span>{unAttended}</span></p>
          <p>Percentage: <span>{percentage}</span></p>
      </div>
    );
  }
}
