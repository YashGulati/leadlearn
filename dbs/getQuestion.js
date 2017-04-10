var question = require('./questionSchema')
// var global = require('./global')

var renderQuestion = function(req, res){
  // const weapon = req.param('weapon')
  question.findRandom().limit(5).exec(function (err, question) {
  console.log(question);
  res.json(question)
});
}

module.exports = { renderQuestion }
