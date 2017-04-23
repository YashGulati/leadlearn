var mongoose = require('mongoose')
var Schema = mongoose.Schema;

var messageSchema = new Schema({
    message: String,
    to: String,
    from: String
}, {
  timestamps: true
}
);

// Compile model from schema
var message = mongoose.model('message', messageSchema );
module.exports = message
