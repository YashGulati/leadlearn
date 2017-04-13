import React, { Component } from 'react'
import Question from '../Question'
import Options from '../Options'
import Result from '../Result'
import styles from './test.styl';

export default class Test extends Component {
  constructor(props) {
    super(props);
    this.state = {
      questions: [],
      question: "Fetching Question...",
      options: [],
      qno: -1,
      showResult: false,
      result: {
        right: 0,
        wrong: 0,
        unAttended: 0
      }
    }
    this.state.answers = [];
    this.fetchQuestions = this.fetchQuestions.bind(this);
    this.nextQuestion = this.nextQuestion.bind(this);
    this.onOptionSelect = this.onOptionSelect.bind(this);
    this.submit = this.submit.bind(this);
    this.fetchQuestions();
  }
  fetchQuestions() {
    var myInit = { method: "GET" };
    fetch("/getQuestion?weapon=" + this.props.weapon, myInit).then((response) => {
      return response.json();
    }).then((questions) => {
      console.log(questions);
      for (var i = 0; i < questions.length; i++) { this.state.answers.push(-1) }
      this.setState({questions});
      this.nextQuestion({ target: { value: 'next' } });
    });
  }
  nextQuestion(e) { const action = e.target.value;
    console.log(action);
    console.log(this.state.answers);
    if ((this.state.qno >= this.state.questions.length -1 && action==='next' ) || ( this.state.qno === 0 && action === 'back' )) {
      console.log('Questions Ended'); return;
    }

    (action === 'next')?this.state.qno++ : this.state.qno--;
    const question = this.state.questions[this.state.qno];
    console.log('question: ');
    console.log(question);
    this.setState({question: question.query, options: question.options});
  }
  submit() {
    console.log('Calculating result...');
    let wrong=0, right=0, unAttended=0;
    for (var i=0; i<this.state.questions.length;i++) {
      console.log(this.state.answers[i] + '||' + (this.state.questions[i].correctOp.charCodeAt(0) - 97));
      if (this.state.answers[i] === -1) { unAttended++; continue; }
      if (this.state.answers[i] === (this.state.questions[i].correctOp.charCodeAt(0) - 97))
        right++;
      else
        wrong++;
    }
    console.log('right->' + right);
    console.log('wrong->' + wrong);
    console.log('unAttended->' + unAttended);
    this.setState({
      result: {
        right, wrong, unAttended
      }
    })
    this.setState({showResult: true})
  }
  cancel() {

  }
  onOptionSelect(e) {
    const answers = this.state.answers;
    answers[this.state.qno] = e.target.value;
    this.setState({answers})
  }
  render() {
    if (this.state.showResult) return <Result {...this.state.result} onReTestClick={this.props.onCancel} />
    return (
      <div>
        <h1>Test for {this.props.weapon}</h1>
        <Question
          onOptionSelect={this.onOptionSelect}
          qno={this.state.qno}
          question={this.state.question}
          options={this.state.options}
          selected={this.state.answers[this.state.qno]} />
        <div className='questionNavBtns'>
          <button className="questionNavBtn left" value='next' onClick={this.nextQuestion}>Next</button>
          <button className="questionNavBtn left" value='back' onClick={this.nextQuestion}>Previous</button>
          <button className="questionNavBtn right" value='cancel' onClick={this.props.onCancel}>Cancel Test</button>
          <button className="questionNavBtn right" value='submit' onClick={this.submit}>Submit</button>
        </div>
      </div>
    )
  }
}
