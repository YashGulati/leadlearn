var mongoose = require('mongoose')
var Schema = mongoose.Schema;

var questionSchema = new Schema({
    query: String,
    options: [],
    correctOp: String,
    tags: []
});

// Compile model from schema
var question = mongoose.model('question', questionSchema );
module.exports = question
