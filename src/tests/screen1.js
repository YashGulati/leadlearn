import React from 'react'

class Screen1 extends React.Component {
  constructor(props){
    super(props)
    this.changeScreen = this.changeScreen.bind(this)
    this.weaponChange = this.weaponChange.bind(this)
    this.state = {weapon: ''}
  }
  changeScreen(e){
    e.preventDefault()
    if(this.state.weapon === '') { alert('select any weapon'); return; }
    this.props.onSubmit('test', this.state.weapon )
  }
  weaponChange(e){
    this.setState( {weapon: e.target.value} )
  }
  render() {
    return (
      <div>
      <center><h1>Ready, Get Set Go!</h1></center>
      {/* <p>Prepare yourself by solving our tests.</p> */}
      <form className="container" onSubmit={this.changeScreen} >
        <select name="course" onChange={this.weaponChange}>
          <option disabled selected defaultValue value> -- Select your weapon -- </option>
          <option value="python">Python</option>
          <option value="java">Java</option>
          <option value="js">JavaScript</option>
          <option value="all">All</option>
        </select>
        <div className="buttons">
          <button type="submit" className="button">TEST</button>
          <button type="button" className="button">TEST ONLY</button>
        </div>
      </form>
    </div>
    )
  }
}

module.exports = Screen1
