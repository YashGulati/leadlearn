var question = require('./questionSchema')

module.exports = function(questionDetails){
  var newquestion = new question(questionDetails)
  newquestion.save(function(){})
}
