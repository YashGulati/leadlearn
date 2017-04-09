var mongoose = require('mongoose')
var Schema = mongoose.Schema;
var random = require('mongoose-random');

var questionSchema = new Schema({
    query: String,
    options: [],
    correctOp: String,
    tags: []
});

// Compile model from schema
questionSchema.plugin(random, { path: 'r' });
var question = mongoose.model('question', questionSchema );
module.exports = question
