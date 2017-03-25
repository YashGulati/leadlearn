import React from 'react'
import Options from './Options'

class Test extends React.Component {
  constructor(props) {
    super(props)
    this.state = {query: 'Fetching question...'}
    this.fetchQuestion = this.fetchQuestion.bind(this)
  }
  componentWillMount() {
    this.fetchQuestion()
  }
  fetchQuestion() { let that = this;
    let url_ = "/getQuestion?weapon="+this.props.weapon
    $.get(url_, function(data, status){
      that.setState({
        query: data.query,
        options: data.options,
      })
      console.log('-> Fetched question: ');
      console.log(that.state.options);
    });
  }
  render() {
    return (
      <div>
        <h2>Test on {this.props.weapon} </h2>
        <div id='questionContainer'>
          <p className="query">Question: {this.state.query}</p>
          <Options options={this.state.options} />
        </div>
      </div>
    )
  }
}

module.exports = Test
