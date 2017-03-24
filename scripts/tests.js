import React from 'react'
import ReactDOM from 'react-dom'
import Screen1 from './tests/screen1'
import Test from './tests/Test'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = { screen: '1', weapon: '' }
    this.screenChange = this.screenChange.bind(this)
  }
  screenChange(sc, weapon){
    this.setState({screen: sc, weapon: weapon});
  }
  render() {
    return (
      <div>
        { this.state.screen==='1'?<Screen1 onSubmit={this.screenChange} />:"" }
        { this.state.screen==='test'?<Test weapon={this.state.weapon} />:"" }
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'))
