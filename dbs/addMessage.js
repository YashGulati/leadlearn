var message = require('./models/message')

module.exports = function(messageDetails){
  var newMessage = new message(messageDetails)
  newMessage.save(function(){})
}
