import React, { Component } from 'react'
// import styles from './tests.styl';

export default class Test extends Component {
  constructor(props) {
    super(props);
    this.state = {
      question: "Fetching Question...",
      options: [],
      
    }
    this.fetchQuestion();
  }
  fetchQuestion() {
    var myInit = { method: "GET" };
    fetch("/getQuestion", myInit).then((response) => {
      return response.json();
    }).then((data) => {
      console.log(data);
      this.setState({question: data.query, options: data.options});
    });
  }
  render() {
    return (
      <div>
        <h1>Test for {this.props.weapon}</h1>
        <p>Question: {this.state.question}</p>
        <ul>
        {
          this.state.options.map((option, idx) => {
            return <li key={idx}>{option}</li>
          })
        }
      </ul>
      </div>
    )
  }
}
