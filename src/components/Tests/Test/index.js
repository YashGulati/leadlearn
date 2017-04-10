import React, { Component } from 'react'
import Question from '../Question'
import Options from '../Options'
import styles from './test.styl';

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
      this.setState({questions});
      this.nextQuestion({ target: { value: 'next' } });
    });
  }
  nextQuestion(e) { const action = e.target.value;
    console.log(action);
    if (this.state.qno >= this.state.questions.length -1 || ( this.state.qno === 0 && action === 'back' )) {
      console.log('Questions Ended'); return;
    }

    (action === 'next')?this.state.qno++ : this.state.qno--;
    const question = this.state.questions[this.state.qno];
    console.log('question: ');
    console.log(question);
    this.setState({question: question.query, options: question.options});
  }
  render() {
    return (
      <div>
        <h1>Test for {this.props.weapon}</h1>
        <Question qno={this.state.qno} question={this.state.question} options={this.state.options} />
        <button className="questionSubmit" value='back' onClick={this.nextQuestion}>Back</button>
        <button className="questionSubmit" value='next' onClick={this.nextQuestion}>Next</button>
      </div>
    )
  }
}
