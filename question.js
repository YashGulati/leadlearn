var question = require('./dbs/questionSchema')
var global = require('./global')

var renderQuestion = function(req, res){
  // const weapon = req.param('weapon')
  question.findOne({  }, function(err, question){
    res.send(question)
  })
}

module.exports = { renderQuestion }
