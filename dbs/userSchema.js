var mongoose = require('mongoose')
var Schema = mongoose.Schema;

var userSchema = new Schema({
    username: String,
    email: String,
    password: String,
    cookie: { type: Number, default: -1 }
});

// Compile model from schema
var user = mongoose.model('user', userSchema );
module.exports = user
