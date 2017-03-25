var question = require('./questionSchema')
// var global = require('./global')

var renderQuestion = function(req, res){
  // const weapon = req.param('weapon')
  question.findOne({  }, function(err, question){
    res.send(question)
    console.log('-> Question Sent: ');
    console.log(question);
  })
}

module.exports = { renderQuestion }
