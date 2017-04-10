import React, { Component } from 'react'
// import styles from './tests.styl';

export default class Test extends Component {
  constructor(props) {
    super(props);
    this.state = {
      questions: [],
      question: "Fetching Question...",
      options: [],
      qno: -1
    }
    this.fetchQuestion = this.fetchQuestion.bind(this);
    this.nextQuestion = this.nextQuestion.bind(this);
    this.fetchQuestion();
  }
  fetchQuestion() {
    var myInit = { method: "GET" };
    fetch("/getQuestion", myInit).then((response) => {
      return response.json();
    }).then((questions) => {
      console.log(questions);
      // const data =  questions[this.state.qno];
      // this.setState({question: data.query, options: data.options});
      this.setState({questions});
      this.nextQuestion();
    });
  }
  nextQuestion() { if (this.state.qno >= this.state.questions.length -1){ console.log('Questions Ended'); return; }
    this.state.qno++;
    const question = this.state.questions[this.state.qno];
    console.log('question: ');
    console.log(question);
    this.setState({question: question.query, options: question.options});
  }
  render() {
    return (
      <div>
        <h1>Test for {this.props.weapon}</h1>
        <p>Question {this.state.qno + 1}: {this.state.question}</p>
        <ul>
        {
          this.state.options.map((option, idx) => {
            return <li key={idx}>{option}</li>
          })
        }
      </ul>
      <button onClick={this.nextQuestion}>Next</button>
      </div>
    )
  }
}
