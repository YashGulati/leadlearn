import React, { Component } from 'react';
import styles from './options.styl';
export default class Options extends Component {
  render() {

    return (
      <ul className="options">
        {
          this.props.options.map((option, idx) => {
            return <li className="option" key={idx}>{option}</li>
          })
        }
      </ul>
    )
  }
}
