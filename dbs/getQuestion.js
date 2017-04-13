var question = require('./questionSchema')
// var global = require('./global')

var renderQuestion = function(req, res){
  let weapon = req.query['weapon'];
  if (weapon === 'all') weapon = /.*/i;
  question.findRandom({tags: weapon}).limit(5).exec(function (err, question) {
  console.log(question);
  res.json(question)
});
}

module.exports = { renderQuestion }
