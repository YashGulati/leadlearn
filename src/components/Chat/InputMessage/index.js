import React from 'react';

export default class Chat extends React.Component {
  handleKeyPress = (e) => {
    if (e.key === 'Enter') this.onSubmit(e);
  }
  onSubmit = (e) => {
    this.addMessage(e);
  }
  addMessage = (e) => {
    var myInit = {
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/x-www-form-urlencoded',
      'Authorization': 'Bearer ' + localStorage.getItem('id_token')
    },
    method: "POST",
    body: JSON.stringify({
      message: e.target.value,
      to: 'global'
    })
    };
    fetch("/chat/addMessage", myInit).then((response) => {
      return response.json();
    }).then((response) => {
      if(response.error) {
        this.setState({error: response.error});
        return;
      }
    });
  }
  render() {
    return (
      <div>
        <input onKeyDown={this.handleKeyPress} />
      </div>
    )
  }
}
