import React from 'react';

export default class Chat extends React.Component {
  state = {messages: []}
  componentWillMount() {
    this.getMessages();
  }
  getMessages = () => {
    var myInit = {
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/x-www-form-urlencoded',
      'Authorization': 'Bearer '+localStorage.getItem('id_token')
    },
    method: "GET"
    };
    fetch("/chat/getGlobalMessages", myInit).then((response) => {
      return response.json();
    }).then((response) => {
      if(response.error) {
        this.setState({error: response.error});
        return;
      }
      console.log(response);
      this.setState({messages: response});
    });
  }
  render() {
    return (
      <div>
        {this.state.messages.map((message, idx)=> {
          return <p key={idx}>{message.from} {message.message}</p>
        })}
      </div>
    )
  }
}
