import React from 'react'
import ReactDOM from 'react-dom'
//
// class List extends React.Component {
//   render() {
//     return (
//     //   this.props.options.map((number) =>
//     // <li>{number}</li>
//     )
//   }
// }

class Options extends React.Component {
  constructor(props){
    super(props)
    this.optionChange = this.optionChange.bind(this)
    this.state = {selected: 0}
  }
  // optionChange(i, event) {
    optionChange(i, e) {
    // let optionSelected = ['a', 'b', 'c', 'd'][i]
    console.log(i+1);
    $('.option:nth-child('+ (this.state.selected) +')').toggleClass('selected')
    $('.option:nth-child('+ (i+1) +')').toggleClass('selected')
    this.state = {selected: i+1}
  }
  render(){
    return (
      <div className="options">
        {this.props.options?this.props.options.map((data, index) => (
          <div className="option" onClick={this.optionChange.bind(this, index)} key={index}>{data}</div> )):""}
    </div>
    )
  }
}

module.exports = Options
