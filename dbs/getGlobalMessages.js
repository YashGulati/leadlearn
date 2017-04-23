var message = require('./models/message');

module.exports = function(req, res){
  return message.find({});
};
