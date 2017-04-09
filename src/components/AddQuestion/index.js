import React, { Component } from 'react'

export default class AddQuestion extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: '',
      options: [],
      correctOp: '',
      tags: []
    }
    this.handleInputChange = this.handleInputChange.bind(this);
  }
  handleInputChange(event) {
    this.setState({ [event.target.name]: event.target.value });
    console.log(this.state[event.target.name]);
  }
  render() {
    return (
      <div style={{padding: 50, background: 'gray', width: '30%', margin: '0 auto'}}>
        <center><h1>Add Question</h1></center>
        <p><label>Query</label><br /><textarea name="query" onChange={this.handleInputChange} placeholder="query" /></p>
        <p><label>options</label><br /><input name="options" onChange={this.handleInputChange} placeholder="options" /></p>
        <p><label>Correct Option</label><br /><input name="correctOp" onChange={this.handleInputChange} placeholder="Correct Option" /></p>
        <p><label>Tags</label><br /><input name="tags" onChange={this.handleInputChange} placeholder="Tags" /></p>
      </div>
    );
  }
}
