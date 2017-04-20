import React from 'react'

export default class Chat extends React.Component {
  state = {authorized: false}
  constructor(props){
    super(props);
    this.state.channels = this.getChannels();
  }
  getChannels() {
    return ['global']
  }
  render() {
    const displayErr = { style: {display: this.state.authorized?'block':'none'} }
    return (
      <div>
        <div className="unauthErr" {...displayErr} >abc</div>
        <div className="channels">
          {this.state.channels}
        </div>
      </div>
    )
  }
}
