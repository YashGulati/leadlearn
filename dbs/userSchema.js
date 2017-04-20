var mongoose = require('mongoose')
var Schema = mongoose.Schema;

var userSchema = new Schema({
    username: String,
    email: String,
    password: String
});

// Compile model from schema
var user = mongoose.model('user', userSchema );
module.exports = user
