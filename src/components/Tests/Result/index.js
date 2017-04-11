import React, { Component } from 'react';
import styles from './index.styl';

export default class Result extends Component {
  render() { const { right, wrong, unAttended } = this.props,
  totalQuestions = right + wrong + unAttended,
  percentage = (right * 100/totalQuestions).toFixed(1),
  percentageColor = (percentage>=50)?'green':'red'

  let remarks = '';
  let remarksClass;
  if (percentage == 100){
    remarks = 'Perfect!';
    remarksClass = 'green'
  }
    return (
      <div className="result">
          <h1 className="resultHeading">Result</h1>
          <p>Total: <span>{totalQuestions}</span></p>
          <p>Right: <span>{right}</span></p>
          <p>Wrong: <span>{wrong}</span></p>
          <p>Not Attended: <span>{unAttended}</span></p>
          <p>Percentage: <span style={{color: percentageColor}}>{percentage}</span></p>
          <h2 className={"remarks " + remarksClass}>{remarks}</h2>
      </div>
    );
  }
}
