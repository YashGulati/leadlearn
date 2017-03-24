import React from 'react'

class Screen1 extends React.Component {
  render() {
    return (
      <div>
        <h3>Question for {this.props.weapon} </h3>
      </div>
    )
  }
}

module.exports = Screen1
