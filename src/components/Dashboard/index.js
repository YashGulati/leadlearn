import React, { Component } from 'react';
import Header from '../header';
import styles from './dashboard.styl';

var ReactCSSTransitionGroup = require('react-addons-css-transition-group');
export default class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.add = this.add.bind(this);
    this.names = [1,2,3,4];
    this.state = {names: this.names};
    this.numb = 4;
  }
  add() {
    // this.names.push(++this.numb)
    // console.log(this.names);
    this.setState({names: [...this.state.names, ++this.numb]})
  }
  renderNames() {
    return this.state.names.map((name, index)=> { return <p key={index} style={{background: '#445566', padding: 10, fontSize: '1.5em', width: '50%'}}>{name}</p> })
  }
  render() {

    const transitionOptions = {
      transitionName: "rightToLeft",
      transitionAppear: true,
      transitionAppearTimeout: 500,
      transitionEnterTimeout: 500,
      transitionLeaveTimeout: 500
    }
    return (
      <div>
        <div className="background"> </div>
        <ReactCSSTransitionGroup {...transitionOptions} >
          <h1 onClick={this.add}>Dashboard</h1>
        </ReactCSSTransitionGroup>
      </div>
    )
  }
}

class TodoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {items: ['hello', 'world', 'click', 'me']};
    this.handleAdd = this.handleAdd.bind(this);
  }

  handleAdd() {
    const newItems = this.state.items.concat([
      prompt('Enter some text')
    ]);
    this.setState({items: newItems});
  }

  handleRemove(i) {
    let newItems = this.state.items.slice();
    newItems.splice(i, 1);
    this.setState({items: newItems});
  }

  render() {
    const items = this.state.items.map((item, i) => (
      <div key={item} onClick={() => this.handleRemove(i)}>
        {item}
      </div>
    ));

    return (
      <div>
        <button onClick={this.handleAdd}>Add Item</button>
        <ReactCSSTransitionGroup
          transitionName="example"
          transitionAppear={true}
          transitionAppearTimeout={500}
          transitionEnterTimeout={500}
          transitionLeaveTimeout={300}>
          {items}
        </ReactCSSTransitionGroup>
      </div>
    );
  }
}
