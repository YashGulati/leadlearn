var question = require('./questionSchema')
// var global = require('./global')

var renderQuestion = function(req, res){
  // const weapon = req.param('weapon')
  question.findRandom().limit(1).exec(function (err, question) {
  console.log(question);
  res.send(question)
});
}

module.exports = { renderQuestion }
