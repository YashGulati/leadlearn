import React, { Component } from 'react';
import Options from '../Options';
import styles from './question.styl';

export default class Question extends Component {
  render() {
    return (
      <div className="question">
        <p className="query">Question {this.props.qno + 1}: {this.props.question}</p>
        <Options
          onOptionSelect={this.props.onOptionSelect}
          options={this.props.options}
          selected={this.props.selected} />
      </div>
    )
  }
}
