import React from 'react'
import Options from './Options'
import Details from './Details'

class Test extends React.Component {
  constructor(props) {
    super(props)
    this.state = {query: 'Fetching question...'}
    this.fetchQuestion = this.fetchQuestion.bind(this)
    this.changeScreen = this.changeScreen.bind(this)
  }
  componentWillMount() {
    this.fetchQuestion()
  }
  changeScreen(e){
    e.preventDefault()
    this.props.onSubmit('1', '' )
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
        <center><h2>Test on {this.props.weapon} </h2></center>
        <div><button onClick={this.changeScreen}>Change Weapon</button></div>
        <Details />
        <div id='questionContainer'>
          <p className="query">Question: {this.state.query}</p>
          <Options options={this.state.options} />
          <button type="button" className="button">Next</button>
        </div>
      </div>
    )
  }
}

module.exports = Test
