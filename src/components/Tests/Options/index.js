import React, { Component } from 'react';
import styles from './options.styl';
export default class Options extends Component {
  constructor(props) {
    super(props);
    this.onOptionSelect = this.onOptionSelect.bind(this)
  }
  onOptionSelect(e) {
    this.props.onOptionSelect(e.target.value);
  }
  render() {
    return (
      <ul className="options">
        {
          this.props.options.map((option, idx) => {
            let selected = this.props.selected===idx?'selected':'';
            return <li className={ 'option '+selected } onClick={this.props.onOptionSelect} value={idx} key={idx}>{option}</li>
          })
        }
      </ul>
    )
  }
}
