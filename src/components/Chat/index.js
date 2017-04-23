import React from 'react';
import UserBtn from '../Buttons/UserBtn';
import LeftPane from './LeftPane';
import Messages from './Messages';
import InputMessage from './InputMessage';
import styles from './chat.styl';

export default class Chat extends React.Component {
  state = {authorized: false, mounted: false}
  constructor(props){
    super(props);
    this.state.channels = this.getChannels();
    this.tokenCheck();
  }
  getChannels() {
    return ['global'];
  }
  tokenCheck() {
    this.state.token = localStorage.getItem('id_token');
    if (!this.state.token) this.state.authorized=false;
    else this.state.authorized=true;
    if (this.state.mounted) this.forceUpdate();
  }
  componentWillMount() {
    this.state.mounted = true;
    this.tokenCheck();
  }
  componentWillUpdate() {
    if (this.state.token != localStorage.getItem('id_token')) {
      console.log('token change detected');
    this.state.mounted = true;
    this.tokenCheck();
    }
  }
  render() {
    if (!this.state.authorized) {
      return (
        <div className="unauthErr">
          <h1>UNAUTHORIZED</h1>
          <p>You must be logged in in order to continue.</p>
          <UserBtn
            location={this.props.location}
            history={this.props.history} value='login'>LOGIN</UserBtn>
          <UserBtn
            location={this.props.location}
            history={this.props.history} value='register'>REGISTER</UserBtn>
        </div>
      )
    }
    return (
      <div className="chat">
        <LeftPane>{this.state.channels}</LeftPane>
        <div className="chatArea">
          <div className="messages">
            <Messages />
          </div>
          <InputMessage />
        </div>
      </div>
    )
  }
}
